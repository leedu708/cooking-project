User.delete_all
Recipe.delete_all
Item.delete_all
Image.delete_all
Ingredient.delete_all

MULTIPLIER = 5

puts 'Old records destroyed'

User.create(:email                 => "admin@test.com",
            :username              => "adminTester",
            :first_name            => "John",
            :last_name             => "Doe",
            :admin                 => true,
            :password              => "password",
            :password_confirmation => "password")

puts 'Create test admin [:email => admin@test.com, :password => password]'

random_ingredients = ['apples', 'avocado', 'bacon', 'baking powder', 'broccoli', 'brown sugar', 'butter', 'chicken', 'eggs', 'fish', 'flour', 'garlic', 'milk', 'mushrooms', 'olive oil', 'rice', 'tomatoes', 'vanilla extract']

random_ingredients.each do |name|
  Ingredient.create(:name => name)
end

puts 'Ingredients created'

(2 * MULTIPLIER).times do
  Recipe.create(:title       => Faker::Lorem.sentence,
                :description => Faker::Lorem.paragraph(3, true, 6))
end

puts 'Recipes created'

volumes = ['cup', 'ts', 'T', 'oz']

Recipe.all.each do |recipe|
  Ingredient.all.each do |ingredient|
    if (rand(10) > 5)
      vol = volumes.sample
      recipe.items.create(:weight        => Faker::Number.between(1, 50).to_s + 'g',
                          :volume        => Faker::Number.between(1, 10).to_s + vol,
                          :notes         => Faker::Lorem.sentence,
                          :ingredient_id => ingredient.id)
    end
  end
end

puts 'Items added to recipes'

Recipe.all.each do |recipe|
  (rand(3 * MULTIPLIER) + 1).times do |x|
    recipe.steps.create(:instructions => Faker::Lorem.sentence,
                        :recipe_order => x + 1)
  end
end

random_tags = ['vegetarian', 'gluten-free', 'milk-free', 'chicken', 'low-fat']

random_tags.each do |tag|
  Tag.create(:name => tag)
end

puts 'Tags created'

Recipe.all.each do |recipe|
  Tag.all.each do |tag|
    if (rand(10) > 5)
      recipe.taggings.create(:tag_id => tag.id)
    end
  end
end

puts 'Added tags to recipes'

puts 'Steps added to recipes'

puts 'SEEDING COMPLETE'