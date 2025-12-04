import { pgTable, serial, text, timestamp, integer, varchar, decimal } from 'drizzle-orm/pg-core';

// Tabel User
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  phone: varchar('phone', { length: 15 }),
  address: text('address'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Tabel Pet
export const pets = pgTable('pets', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(), // dog, cat, bird, etc
  breed: text('breed'),
  age: integer('age'),
  weight: decimal('weight'),
  ownerId: integer('owner_id').references(() => users.id),
  medicalNotes: text('medical_notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Tabel Services
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: decimal('price').notNull(),
  duration: integer('duration'), // in minutes
  category: text('category'), // grooming, vet, boarding, etc
});

// Tabel Bookings
export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  petId: integer('pet_id').references(() => pets.id),
  serviceId: integer('service_id').references(() => services.id),
  bookingDate: timestamp('booking_date').notNull(),
  status: text('status').default('pending'), // pending, confirmed, completed, cancelled
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

export type User = typeof users.$inferSelect;
export type Pet = typeof pets.$inferSelect;
export type Service = typeof services.$inferSelect;
export type Booking = typeof bookings.$inferSelect;