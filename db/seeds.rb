# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
b1= Boba.create(name: "greenbobo", flavor: "green")
b2= Boba.create(name: "green", flavor: "green")

b1.ingredients << Ingredient.create(name: "Tapioca")
b1.ingredients << Ingredient.create(name: "Coconut Jelly")
b1.ingredients << Ingredient.create(name: "Red Bean")
b2.ingredients << Ingredient.create(name: "Pop Jelly")
b2.ingredients << Ingredient.create(name: "Brown Sugar Tapioca")
b2.ingredients << Ingredient.create(name: "Aloe")