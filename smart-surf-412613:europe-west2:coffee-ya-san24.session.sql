--@block

CREATE TABLE CoffeeShops(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    content TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATE,
    videoURL VARCHAR(255) NOT NULL
)
;

--@block
INSERT INTO CoffeeShops (name, description, location, date, videoURL)
VALUES (
    'Origin Coffee',
    'Excellent Coffee Chain with a branch near Southwark',
    'Southwark, London',
    '2022-10-07',
    'BSpppEYzgkE'
  ),
  (
    'Monmouth',
    'Famous coffee roastery in Borough market',
    'London Bridge, London', 
    '2022-10-15',
    'xql0gIqyfJs'
    ),
    (
    'Kaffeine',
    'Regarded as one of the best coffee shops in London',
    'Oxford Circus, London', 
    '2022-10-29', 
    'DtMyqddqRMg'
    ),
    (
    'Joe & The Juice',
    'Chain Coffee shop with a branch near Tottenham Court Road',
    'Tottenham Court Road, London',
    '2022-11-02',
    'ytUVQi03loA'
    ),
    (
    'Shoreditch Grind',
    'Wonderful small coffee shop right outside Old Street Underground',
    'Old Street, London',
    '2022-11-08',
    'HlnZKfqVcRI'
    ),
    (
        'Prufrock Coffee',
        'Cosy, specialty coffee shop close to Farringdon',
        'Farringdon, London',
        '2022-11-10',
        'Z5JBeqr0yq8'
    ),
    (
        'Guillam Coffee',
        'Close by Bayswater station and out of the way from the main street',
        'Bayswater, London',
        '2022-11-12',
        'cD0n6uyYmdQ'
    ),
    (
        'Omotesando Koffee',
        'Japanese style coffee shop with outward facing windows',
        'Tottenham Court Road, London',
        '2022-11-19',
        'F3-75WzV5dY'
    ),
    (
        'Redemption Coffee Roasters',
        'Great chain doing good for the community with rehabilitation into the world of coffee.',
        'Covent Garden, London',
        '2022-12-04',
        'zoV4rQZpf5k'
    ),
    (
        'Takk',
        'Unique building and unique coffee in Manchester',
        'Manchester',
        '2022-12-08',
        'RJhYJamgNBk'
    ),
    (
        'Foundation Coffee',
        'Great coffee shop in Manchester',
        'Manchester',
        '2022-12-09',
        'BoWgi2lXIRM'
    ),
    (
        'CAYA',
        'Co-working coffee shop in Brixton',
        'Brixon, London',
        '2022-12-11',
        'HQIfCyuHMIM'
    ),
    (
        'Happy Bones Coffee',
        'Small coffee shop near Warren Street',
        'Warren Street, London',
        '2022-12-30',
        'T3phyLqbrMY'
    ),
    (
        'FWD Coffee',
        'Excellent coffee place with a great interior, good seats and atmosphere!',
        'Farringdon, London',
        '2023-01-08',
        'ZDsIOok9pSY'
    ),
    (
      'The Gentlemans Baristas',
      'Small coffee shop just off the main road, quiet and cosy.',
      'London Bridge, London',
      '2023-01-27',
      '8paJMbumz6w'  
    ),
    (
      'Katsute 100',
      'Japanese tea shop, with a great Victorian and Japanese interior, good desserts as well as tea!',
      'Angel, London',
      '2023-02-05',
      '7VWDEP9yznU'
    )
  ;

--@block
SELECT * FROM CoffeeShops;

--@block
CREATE TABLE BLOGPOSTS(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date DATE,
    videoURL VARCHAR(255) NOT NULL
)

--@block
INSERT INTO BLOGPOSTS (title, content, date, videoURL) 
VALUES (
    'On visiting Monmouth',
    'One of the best coffee shops in Central London. This is right in the heart of Borough Market. Its one of my favourites if you want excellent quality coffee, all in a very compact brick building with a nice interior. The front of the shop is open so you can walk right in. Todays coffee: £3.20. Location: Borough Market',
    '2022-10-07',
    'xql0gIqyfJs'
  ),
  (
    'Redemption doing good for the community!',
    'An excellent coffee shop in Covent Garden! Redemption employees formerly incarcerated people and gives them a chance to learn new skills to become employable and reintegrate back into society. They teach them the art of coffee roasting and other useful skills. The coffee I had today was an espresso, a special blend of Nicaraguan and Rwandan coffee beans called the Nöel Blend. Roasted with Mulled Wine, Dark Chocolate and Walnuts. Suffice to say it was excellent! Location: Redemption Coffee Roasters, Covent Garden, 40 Drury Lane, London, WC2B 5RR. Closest Station: Covent Garden (Piccadilly Line)',
    '2022-12-08',
    'zoV4rQZpf5k'
  ),
  (
    'Co-working space and coffee!',
    'I really like Caya. Its got everything you need to get some work done and have great coffee and cakes while youre at it. Its quite easy to get to, follow the overpass from Brixton Underground station, take a left and keep going til you find it on a street opposite a park. The hanging socket blocks are useful to avoid trailing wires on the ground! The coffee and cake I had were excellent. Definitely worth a visit! Price: Filter Coffee and Cake = £6.70, Location: Caya Brixton, 344 Coldharbour Lane, London, SW9 8QH, Closest Station: Brixton Underground (Victoria Line)',
    '2022-12-11',
    'HQIfCyuHMIM'
  ),
  (
    'Archetype Coffee! Friendly vibes and excellent coffee :D',
    'Nearby Great Titchfield Street, tucked away in a quiet street is Archetype Coffee. One of the best coffee shops Ive been to recently! Immediately as you go through the door, youre welcomed by the friendly baristas. By design, the seats are all facing the counter making it welcoming if you want to have a chat with other patrons and the barista. The filter coffee I had was absolutely excellent and the atmosphere made it an fantastic coffee shop to visit. Location: 31 Riding House St, London W1W 7DY. Closest Stations: Goodge Street (Northern Line)',
    '2022-12-30',
    'T3phyLqbrMY'
  ),
  (
    'Frequency Coffee',
    'This excellent coffee shop near Angel is a great place to work and relax with a nice cup of coffee. The cafe has 3 floors that are all quite compact but cosy. The wifi was great for doing non intensive work like watching Youtube and browsing. For the future I will test how video calls work at different cafes so we can see its possible to work there consistently.Location: 13 Camden Passage, London, N1 8EA. Website: https://frequencycoffee.com Closest Stations: Angel (Northern Line)',
    '2023-02-05',
    '7VWDEP9yznU'
  ),
      (
    'Japanese style cafe with great interior and good wifi!',
    'This is one of my favourite coffee shops in London. It manages to capture the size, the aesthetic and the flavours of an excellent coffee shop in Tokyo. The name Omotesando is the name of a neighbourhood in Tokyo. It reminds me of many coffee shop adventures I had in the Kansai region too. A small place, there are very few seats. If you`re lucky to grab one, its a good place to watch the world go by. Location: Omotesando Koffee. Closest Station: Tottenham Court Road (Elizabeth, Northern, Central Line)',
    '2022-11-19',
    'F3-75WzV5dY'
    )
  ;

--@block
SELECT * FROM BLOGPOSTS;