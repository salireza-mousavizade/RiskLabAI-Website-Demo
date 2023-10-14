import {NextResponse} from "next/server";

const postmark = require('postmark')

export async function POST(req) {

    const client = new postmark.ServerClient('fd9632d3-4fba-4817-9bbc-04c10578b4ab');

    const requestBody = await req.json();

    try {
        // Define the template model with variables you want to replace in your template.

        const textBody = "Welcome!\nThanks for trying RiskLabAI. We’re thrilled to have you on board. To get the most out of RiskLabAI, do this primary next step:\nIf you have any questions, feel free to mousavizade@risklab.ai (email our customer success team). (We're lightning quick at replying.) We also offer during business hours.\n\nThanks\nAlireza and the RiskLabAI Team"
        const response = await client.sendEmail({
            "From": "mousavizade@risklab.ai",
            "To": requestBody.email,
            "Subject": "Welcome to RiskLabAI Newsletter!",
            "TextBody": textBody,
        });

        if (response.ErrorCode !== 0) {
            return
        }

        return


    } catch (error) {
        return
    }
}

