import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const fetchSubscriptionDetails = async (subscriptionId) => {
  try {
    const subscriptionDetails = await razorpay.subscriptions.fetch(subscriptionId);
    return subscriptionDetails;
  } catch (error) {
    console.error('Error fetching subscription details:', error);
    throw new Error('Failed to fetch subscription details from Razorpay');
  }
};

export default razorpay;
