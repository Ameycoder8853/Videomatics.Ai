import { db } from '../db'; // Adjust based on your project structure
import { Users } from '../configs/schema'; // Adjust path to schema
import { eq } from 'drizzle-orm';
import { fetchSubscriptionDetails } from './razorpay'; // Adjust path

export const updateSubscriptionInDB = async (subscriptionId, userEmail) => {
  try {
    // Fetch subscription details from Razorpay
    const subscriptionDetails = await fetchSubscriptionDetails(subscriptionId);

    const subscriptionEndDate = new Date(subscriptionDetails.current_period_end * 1000); // Convert timestamp

    // Update user details in Neon DB
    await db.update(Users)
      .set({
        credits: 600,
        subscription: true,
        subscriptionEndDate,
      })
      .where(eq(Users.email, userEmail));

    console.log(`Updated subscription for ${userEmail}`);
  } catch (error) {
    console.error('Error updating subscription in DB:', error);
    throw new Error('Failed to update subscription');
  }
};
