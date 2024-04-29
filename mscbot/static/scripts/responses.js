
 function getBotResponse(input) {
     //rock paper scissors
     if (input == "rock") {
         return "paper";
     } else if (input == "paper") {
         return "scissors";
     } else if (input == "scissors") {
         return "rock";
     }

     // Simple responses
     if (input == "hii") {
         return "Hello , I am your Buddy. I will be helping you with your issue today.";
     } else if (input == "How can I book ticket") {
         return "<ul><li>Step 1: Go to booking site</li> <li>Step 2:Then choose from where you want to go </li> <li>Step 3: follow the ownstep in that particular page</ul> </li>";
     }
     //else {
    //      return "Try asking something else!";
    // 
//  }
else if (input=="referral help"){
    return "You need to login to proceed further with this flow."
}
else if (input=="how to cancel a booked ticket"){
    return" When you view the details of your  ticket booking on the app or website, you are presented with the option to either modify your booking or cancel the ticket. Click on the option that best suits your travel needs. A small cancellation fee might be charged based on the timing of your cancellation request";
}
else if (input=="Are there any cancellation charges when a ticket is cancelled?"){
    return"Yes, there are. Depending on when the cancellation was initiated, an amount might get deducted ";
}
else if (input=="Is it mandatory to take a printout of the ticket?"){
    return "It depends on the travel operator you have booked your online  tickets with. Even mTickets are available on website. For operators that support mTickets, the SMS that is sent to your mobile can be produced at the time of boarding and you will be allowed to travel.";
}
else if(input=="I've lost my ticket. What should I do now?"){
    return "please call any of our call centers and our executive will resend you a copy by mail.";
}
else if(input=="How can I get the discounts on the bus booking?"){
    return "Copy the coupon code and paste it during checkout to avail of the discount."; 
}
else if(input=="Do I Need Travel Insurance?"){
    return "To buy or not buy. It all depends own risk and you tolerance for it";
}
else {
        return "Try asking something else!";
  }
 }
