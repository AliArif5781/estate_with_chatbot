import { GoogleGenerativeAI } from "@google/generative-ai";

// DON'T DELETE THIS COMMENT
// Follow these instructions when using this blueprint:
// - Note that the newest Gemini model series is "gemini-2.5-flash" or gemini-2.5-pro"

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const WEBSITE_CONTEXT = `You are a helpful chatbot for Premier Properties, a real estate company. You should ONLY answer questions about this specific website and company. If someone asks about anything not related to Premier Properties or real estate services, politely redirect them to ask about the company's properties, agents, or services.

COMPANY INFORMATION:
- Name: Premier Properties
- Established: 2005
- Tagline: "Your trusted partner in finding the perfect home"
- Services: Buy Property, Sell Property, Rent Property, Find Agents

KEY FEATURES:
1. Expert Knowledge - Over 18 years of experience in the real estate market with proven results
2. Market Insights - Access to comprehensive market data and trends to make informed decisions
3. Trusted Service - Licensed professionals committed to protecting client interests
4. 24/7 Support - Team always available to answer questions and provide guidance

AVAILABLE PROPERTIES (Featured Listings):
1. 456 Ocean Drive, Malibu, CA - $1,250,000 - 5 beds, 4 baths, 3,800 sqft - Featured luxury waterfront property
2. 123 Maple Street, Portland, OR - $549,000 - 4 beds, 3 baths, 2,450 sqft - New listing, modern suburban home
3. 789 Colonial Way, Boston, MA - $875,000 - 4 beds, 3 baths, 3,200 sqft - Featured classic colonial house
4. 321 Downtown Plaza, Seattle, WA - $695,000 - 2 beds, 2 baths, 1,850 sqft - Urban luxury condo
5. 654 Craftsman Lane, Austin, TX - $425,000 - 3 beds, 2 baths, 1,920 sqft - New listing, craftsman bungalow
6. 987 Mediterranean Court, Miami, FL - $1,850,000 - 6 beds, 5 baths, 4,500 sqft - Featured Mediterranean villa

TOP AGENTS:
1. Sarah Johnson - Specialization: Luxury Properties, Rating: 4.9/5, Properties Sold: 127
2. Michael Chen - Specialization: Commercial Real Estate, Rating: 4.8/5, Properties Sold: 94
3. Emily Rodriguez - Specialization: First-Time Buyers, Rating: 5.0/5, Properties Sold: 156

PROPERTY TYPES AVAILABLE:
- Houses
- Condos
- Townhouses
- Land

RESOURCES:
- Market Reports
- Buyer's Guide
- Seller's Guide
- Investment Tips

If asked about anything outside of Premier Properties, its services, properties, or agents, politely say: "I'm here to help with questions about Premier Properties and our real estate services. How can I assist you with finding your dream home or connecting with one of our expert agents?"

Keep responses concise, friendly, and professional. Always try to be helpful and guide users toward relevant information about the website.`;

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

async function validateQuestionRelevance(question: string): Promise<boolean> {
  try {
    const validatorModel = ai.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: `You are a classifier. Determine if a question is related to Premier Properties real estate company, its properties, agents, services, or real estate in general. 
      
      Return JSON with "relevant" field as true if the question is about:
      - Premier Properties company or its services
      - Properties, homes, real estate listings
      - Real estate agents
      - Buying, selling, or renting properties
      - Real estate market or related topics
      
      Return JSON with "relevant" field as false if the question is about anything else (weather, sports, general knowledge, etc.).
      
      Example: {"relevant": true} or {"relevant": false}`,
    });

    const result = await validatorModel.generateContent({
      contents: [{ role: "user", parts: [{ text: question }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });
    
    const response = await result.response;
    const text = response.text().trim();
    const parsed = JSON.parse(text);
    
    return parsed.relevant === true;
  } catch (error) {
    console.error("Question validation error:", error);
    return false;
  }
}

async function validateResponseRelevance(responseText: string): Promise<boolean> {
  try {
    const validatorModel = ai.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: `You are a content classifier. Analyze if the given text is specifically about Premier Properties real estate company, their services, properties, or agents.
      
      Return JSON with "relevant" field as true if the text discusses:
      - Premier Properties company, their services, or team
      - Specific properties, homes, or real estate listings
      - Real estate agents (Sarah Johnson, Michael Chen, Emily Rodriguez)
      - Real estate services (buying, selling, renting properties)
      - Property features, prices, locations
      - General real estate advice in the context of Premier Properties
      
      Return JSON with "relevant" field as false if the text discusses:
      - Unrelated topics (weather, sports, general knowledge, technology, etc.)
      - Generic advice not related to real estate
      - Other companies or services not related to real estate
      
      Also return true if the text is a polite redirect message about staying on topic.
      
      Example: {"relevant": true} or {"relevant": false}`,
    });

    const result = await validatorModel.generateContent({
      contents: [{ role: "user", parts: [{ text: `Classify this response: "${responseText}"` }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });
    
    const response = await result.response;
    const text = response.text().trim();
    const parsed = JSON.parse(text);
    
    return parsed.relevant === true;
  } catch (error) {
    console.error("Response validation error:", error);
    return false;
  }
}

export async function chatWithGemini(
  userMessage: string,
  history: Message[] = []
): Promise<string> {
  const REDIRECT_MESSAGE = "I'm here to help with questions about Premier Properties and our real estate services. How can I assist you with finding your dream home or connecting with one of our expert agents?";
  
  try {
    const isQuestionRelevant = await validateQuestionRelevance(userMessage);
    
    if (!isQuestionRelevant) {
      return REDIRECT_MESSAGE;
    }

    const model = ai.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: WEBSITE_CONTEXT,
    });

    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const botResponse = response.text() || "I'm sorry, I couldn't process that. Please try again.";
    
    const isResponseRelevant = await validateResponseRelevance(botResponse);
    
    if (!isResponseRelevant) {
      console.warn(`Off-topic response detected for question: "${userMessage}"`);
      return REDIRECT_MESSAGE;
    }
    
    return botResponse;
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to get response from chatbot");
  }
}
