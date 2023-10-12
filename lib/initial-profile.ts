import { currentUser, redirectToSignUp } from "@clerk/nextjs";
import { db } from "./db";

export default async function initialProfile() {
  const curUser = await currentUser();
  if (!curUser) {
    return redirectToSignUp();
  }
  const user = await db.user.findUnique({
    where: {
      userId: curUser.id,
    },
  });

  if (user) {
    return user;
  }
  const createdUser = db.user.create({
    data: {
      userId: curUser.id,
      nickname: `${curUser!.id}`,
      role: "GUEST",
    },
  });
  return createdUser;
}
