# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding ..."

Product.create(
{
        "name":  "Hill's Science Diet",
        "description":  "Adult Perfect Weight Chicken Recipe Dry Cat Food, 15 lbs., Bag",
        "price":  55.98 ,
        "category":   "Cat Food" ,
        "image_url":   "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2266427-center-1"
    
})
Product.create(
{
        "name":  "Taste of the Wild Prey",
        "description":  "Angus Beef Limited Ingredient Recipe Dry Cat Food, 15 lbs. Bag",
        "price":  47.99,
        "category":   "Cat Food" ,
        "image_url":   "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3176562-center-1"
    
})
Product.create(
{
        "name":  "Purina Pro Plan",
        "description":  "High Calorie, High Protein 30/20 Chicken & Rice Formula Dry Dog Food, 50 lbs.",
        "price":  83.98,
        "category":   "Dog Food" ,
        "image_url":   "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2919977-center-1"
    
})
Product.create(
{
      "name":  "Good Lovin'",
        "description":  "Traditional Pig Ear Dog Chew, 0.65 oz.",
        "price":  2.94,
        "category":   "Dog Food" ,
        "image_url":   "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_bypetco-badge,fl_relative,w_0.20,g_south_east,e_sharpen/2729129-center-1"
    
})
Product.create(
{
        "name":  "Aqueon",
        "description":  "Ascent Frameless LED Aquarium Kit, 10 Gallon",
        "price":  95.99,
        "category":   "Fish" ,
        "image_url":   "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.12,g_north_west,e_sharpen/2788541-center-3"
})

puts "end."