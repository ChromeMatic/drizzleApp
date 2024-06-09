import { pgTable, uuid, varchar } from "drizzle-orm/pg-core"

export const UsersTable = pgTable("users",{
    id: uuid("Id").primaryKey(),
    username: varchar("username").notNull(),
    email: varchar("email_address").notNull(),
    //created_at:
})

export const TodoTable = pgTable("todo",{
    id: uuid("Id").primaryKey(),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    //created_at:
})