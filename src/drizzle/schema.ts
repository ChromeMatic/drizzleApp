import { pgTable, uuid, varchar } from "drizzle-orm/pg-core"

export const UsersTable = pgTable("users",{
    id: uuid("Id").primaryKey(),
    username: varchar("username").notNull(),
    email: varchar("email_address").notNull(),
    password: varchar("credentials").notNull(),
    //created_at:
})

export const TodoTable = pgTable("todo",{
    id: uuid("Id").primaryKey(),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    //created_at:
})

export const TodoGroup = pgTable("TodoGroup",{
    id: uuid("Id").primaryKey(),
    group_name: varchar("group_name").notNull(),
    description: varchar("description").notNull(),
    //created_at:
})