
# json.parties do |party|
#     json.array! party, :name
# end

# json.extract! @party, :name, :guests

json.party do
    json.extract! @party.name, @party.guests
end

# json.guests do |guest|
#     json.guest
# end