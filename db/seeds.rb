quartets = eval File.open('db/quartets.rb').read

quartets.each do |q|
  Quartet.create!({
    country: q[:country],
    uri: q[:uri],
    image: q[:cover_image],
    year: q[:year],
    title: q[:title] })
  end
