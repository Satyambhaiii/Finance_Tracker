// import { config } from "dotenv";
// import { eachDayOfInterval, subDays } from "date-fns";
// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import { categories, accounts, transactions } from "@/db/schema";

// config({ path: ".env.local" });

// const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle(sql);

// const SEED_USER_ID = "user_2i5mIVv6BQUTheeVwlkfc19yOmN";
// const SEED_CATEGORIES =[
//     {id:"category_1",name:"Food",userID:SEED_USER_ID,plaidID:null},
//     {id:"category_2",name:"Rent",userID:SEED_USER_ID,plaidID:null},
//     {id:"category_3",name:"Utilities",userID:SEED_USER_ID,plaidID:null},
//     {id:"category_7",name:"Clothing",userID:SEED_USER_ID,plaidID:null},
// ];
// const defaultTo = new Date();
// const defaultFrom =subDays(defaultTo,90);
// const SEED_ACCOUNTS =[
//     {id:"account_1",name:"Checking",userID:SEED_USER_ID,plaidID:null},
//     {id:"account_2",name:"Savings",userID:SEED_USER_ID,plaidID:null},
// ]


// // const SEED_TRANSACTIONS: typeof transactions.$inferSelect[]=[];

// const SEED_TRANSACTIONS: typeof transactions.$inferSelect[] = [];

// const generateRandom = (category: typeof categories.$inferInsert) => {
//   switch (category.name) {
//     case "Rent":
//       return Math.random() * 40 + 90;
//     case "Utilities":
//       return Math.random() * 200 + 90;
//     case "Health":
//       return Math.random() * 30 + 90;
//     case "Clothing":
//       return Math.random() * 50 + 90;
//     case "Miscellaneous":
//       return Math.random() * 60 + 90;
//     default:
//       return Math.random() * 70 + 90;
//   }
// };

// const generateForDay = (day: Date) => {
//   const num = Math.floor(Math.random() * 4) + 1;

//   for (let i = 0; i < num; i++) {
//     const category = SEED_CATEGORIES[Math.floor(Math.random() * SEED_CATEGORIES.length)];
//     const isExpense = Math.random() > 0.6;
//     const amount = generateRandom(category);

//     SEED_TRANSACTIONS.push({
//       id: `transaction_${SEED_TRANSACTIONS.length + 1}`,
//       accountId: SEED_ACCOUNTS[Math.floor(Math.random() * SEED_ACCOUNTS.length)].id,
//       categoryId: category.id,
//       date: day,
//       payee: `Payee ${SEED_TRANSACTIONS.length + 1}`,
//       amount: isExpense ? -amount : amount,
//       notes: `Note ${SEED_TRANSACTIONS.length + 1}`,
//     });
//   }
// };

// const generate = () => {
//   const days = eachDayOfInterval({ start: defaultFrom, end: defaultTo });
//   days.forEach(day => generateForDay(day));
// };

// generate();

// const main = async () => {
//   try {
//     await db.delete(transactions).execute();
//     await db.delete(accounts).execute();
//     await db.delete(categories).execute();
//     await db.insert(categories).values(SEED_CATEGORIES).execute();
//     await db.insert(accounts).values(SEED_ACCOUNTS).execute();
//     await db.insert(transactions).values(SEED_TRANSACTIONS).execute();
//     console.log("Database seeded successfully");
//   } catch (error) {
//     console.log("Error during seed", error);
//     process.exit(1);
//   }
// };

// main();
