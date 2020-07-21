# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all

admin1 = User.create!(username: 'Zain Cobra', email: 'zcobra@gmail.com', password:'123456', image_url:'https://images.unsplash.com/photo-1594285856129-d3b0e4be02f4', bio:'Knee deep in the water somewhereGot the blue sky, breeze and it dont seem fair The only worry in the world Is the tide gonna reach my chair')
admin2 = User.create!(username: 'Colin Quinn', email: 'Cquinn@gmail.com', password:'123456', image_url: 'https://images.unsplash.com/photo-1593839686924-4b344fac3f8f', bio:'Your Limitation- its only your imagination!')
admin3 = User.create!(username: 'Peter Lange', email: 'Plange@gmail.com', password:'4567890', image_url: 'https://images.unsplash.com/photo-1593201076951-dffd793073a6', bio:'Live your life a quarter mile at a time!')

post1 = Post.create(image_url:'https://images.unsplash.com/photo-1529852572069-2fcbe7599434', captions: 'Life an ocean, and the goals the chair', user_id: admin1.id)
post2 = Post.create(image_url:'https://images.unsplash.com/photo-1549880338-65ddcdfd017b', captions: 'Aint no mountain high enough, aint no valley low enough, to stop me from getting to you Babe!', user_id: admin2.id)
post3 = Post.create(image_url:'https://images.unsplash.com/photo-1594474716318-9c4d3bacf94b', captions: 'Lost in the right direction!', user_id: admin3.id)

Comment.create(post_id: post1.id, user_id: admin2.id, content: 'Save me a seat!')
Comment.create(post_id: post2.id, user_id: admin3.id, content: 'Dont look down!')
Comment.create(post_id: post3.id, user_id: admin1.id, content: 'Ill come find you no worries!')