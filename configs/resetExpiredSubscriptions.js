import { db } from '../db';
import { eq, lt } from 'drizzle-orm';
import { Users } from '../configs/schema';

export const resetExpiredSubscriptions = async () => {
  try {
    const currentDate = new Date();

    const expiredUsers = await db.select().from(Users).where(lt(Users.subscriptionEndDate, currentDate));

    for (const user of expiredUsers) {
      await db.update(Users)
        .set({ credits: 0, subscription: false })
        .where(eq(Users.id, user.id));
    }

    console.log(`Reset ${expiredUsers.length} expired subscriptions.`);
  } catch (error) {
    console.error('Error resetting expired subscriptions:', error);
  }
};
