-- ------------------------------------------
-- Test Data
-- ------------------------------------------
---- users table
INSERT INTO users (email, username, age, password, image) VALUES
('momilex409@0pppp.com', 'ActREcuR', 20, 'sNCuVXy3', '');
INSERT INTO users (email, username, age, password, image) VALUES
('p7azadi.welat7@filel.site', 'NcELiNwH', 22, 'n4ZZCN2Y', '');
INSERT INTO users (email, username, age, password, image) VALUES
('gstifler.soe@epubb.site', 'lINgESte', 23, '852vSWRA', '');
INSERT INTO users (email, username, age, password, image) VALUES
('jjessiquinhagost@bizimalem-support.de', 'oRpArTiV', 28, 'zwYeEbjr', '');
INSERT INTO users (email, username, age, password, image) VALUES
('hello@hello.com', 'helloCrafty', 40, 'hjfdsahjfki8o3', '');
INSERT INTO users (email, username, age, password, image) VALUES
('helloworlder@hello.com', 'craftExpect', 30, '45fd4a5fda43', '');
INSERT INTO users (email, username, age, password, image) VALUES
('hellokitty@hello.com', 'iamkitty', 24, 'jfdklafud89a7f', '');
INSERT INTO users (email, username, age, password, image) VALUES
('hellopiggy@hello.com', 'iampiggy', 27, 'jfhdkaf89da9', '');
INSERT INTO users (email, username, age, password, image) VALUES
('hellogg@hello.com', 'iamgg', 30, '4fd5a4f5da6', '');
INSERT INTO users (email, username, age, password, image) VALUES
('hellogurbo@hello.com', 'superGurboo', 29, 'fdaf4da5f4d6a', '');
INSERT INTO users (email, username, age, password, image) VALUES
('helloThread@hello.com', 'superwoman', 31, 'fd456a4d5f', '');
INSERT INTO users (email, username, age, password, image) VALUES
('helloCrochet@hello.com', 'superhaha', 41, 'df4a5dd544f', '');
INSERT INTO users (email, username, age, password, image) VALUES
('ben@crafty-caribbean.com', 'ben', 18, '$2b$12$iv.o3BfArbbVrDGArfEpn.brEvDxsZZCJmQ4NHbQSIr9XcDBdMeKa', '');
INSERT INTO users (email, username, age, password, image) VALUES
('monica@crafty-caribbean.com', 'monica', 18, '$2b$12$AKqXwElIHRJ0GSzeN7EvB.qHovF/X0jHsOg.Qgy5sePDQbZ5N3hyO', '');
INSERT INTO users (email, username, age, password, image) VALUES
('phil@crafty-caribbean.com', 'phil', 18, '$2b$12$OOQVLIwQsm8o/ZIuM4.atuwkdpVXw0j5jgIwWdX5Bs..klMvuINbe', '');
INSERT INTO users (email, username, age, password, image) VALUES
('ika@crafty-caribbean.com', 'ika', 18, '$2b$12$AFfpG8muzTVE/vGDhX25pO.XTOmVnh9xy1sy1SNBIPQl6kPvP6Bue', '');
INSERT INTO users (email, username, age, password, image) VALUES
('gordon@crafty-caribbean.com', 'gordon', 18, '$2b$12$8L9IrBZ6wsxc4mnq9nMRH.LOnX0YOnG9H0k1qQ54e2yCp3UCDAqi.', '');
INSERT INTO users (email, username, age, password, image) VALUES
('ronny@crafty-caribbean.com', 'ronny', 18, '$2b$12$g7E3vfIdQsjJsNLNzAJ9YOpsP/TamE7WuiM6fXo3ntUZZNYDrIFom', '');
INSERT INTO users (email, username, age, password, image) VALUES
('mikey@crafty-caribbean.com', 'mikey', 18, '$2b$12$oJlfO4wntwIr.eRpcv7tIOzbieNR/E6qHMGF7CA86ukXAdSVBdkLO', '');

---- patterns table
INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (1, 'midnight anemonte', 'Crochet', 'Intermediate', 2.97,
			'using DMC’s new colours of stranded cotton. Royal purples are emphasised in this design, with hints of yellow and orange thoughout. Be sure to check your download folder for printable pattern.',
			0, false, 0, '{"https://static1.dmc.com/cache/p/a/pat0339_01_880x1322.jpg",
"https://static1.dmc.com/cache/p/a/pat0339_02_440x661.jpg",
"https://static1.dmc.com/cache/p/a/pat0339_03_880x1322.jpg",
"https://static1.dmc.com/cache/p/a/pat0339_04_880x1322.jpg",
"https://static1.dmc.com/cache/p/a/pat0339_05_440x661.jpg"
}');

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (2, 'signle peony', 'Crochet', 'Intermediate', 5.94,
			'Add a touch of pink to your stitches with this pretty peony design. In an elegant hand drawn style, this pattern uses intricate outlines to create a blooming beauty. Stitch this lovely peony on any pillowcase or kitchen linen. Be sure to check your download folder for printable pattern.',
			0, false, 0, '{"https://static1.dmc.com/cache/p/a/pat0337_01_880x1322.jpg",
"https://static1.dmc.com/cache/p/a/pat0337_02_880x1322.jpg",
"https://static1.dmc.com/cache/p/a/pat0337_04_880x1322.jpg",
"https://static1.dmc.com/cache/p/a/pat0337_05_880x1322.jpg"
}');

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (3, 'cupcake', 'Crochet', 'Novice', 6.25,
			'Indulge in a delicious new project with this free amigurumi cupcake pattern. Download it free and learn how to stitch this sweet treat using three colours of our soft, smooth Pearl Cotton thread and your 2.5mm crochet hook. ',
			0, false, 0, '{"https://static1.dmc.com/cache/p/a/pat14863_880x1322.jpg",
			"https://static1.dmc.com/cache/p/a/pat14864_880x1322.jpg",
			"https://static1.dmc.com/cache/p/a/pat14861_880x1322.jpg",
			"https://static1.dmc.com/cache/p/a/pat14862_880x1322.jpg",
			"https://static1.dmc.com/cache/p/a/pat1486_880x1322.jpg"}');

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (3, 'decorative vase', 'Knitting', 'Advanced', 9.25,
			'Let your creativity blossom with this Decorative Vase design. This cross-stitch design encompasses an intricate vase, accompanied with a small floral arrangement. Use our signature Stranded Cotton thread for the perfect finish and then display for all to see! Download this free pattern and explore all of our other floral inspired designs in this collection.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat15174_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat15171_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat15172_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat15173_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat1517_880x1322.jpg']);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (4, 'blue blooms', 'Crochet', 'Advanced', 9.25,
			'This flower with two leaves boxed in with two solid lines is a simple but effective pattern. The vintage style of the block colour will make an intricate cushion cover, or you could frame it and hang it on the wall to bring a nostalgic feel to your home. Be sure to check your download folder for printable pattern.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat0771_01_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat0771_02_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat0771_03_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat0771_04_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat0771_05_880x1322.jpg']);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (5, 'woodland mushrooms', 'Crochet', 'Intermediate', 3.00,
			'Have some fungi fun with this woodland mushrooms free pattern from DMC. Embroider them onto your bathroom towels, beach bags, or cushions to update your accessories with a unique, autumnal twist.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat1366_440x661.jpg',
			'https://static1.dmc.com/cache/p/a/pat13661_440x661.jpg',
			'https://static1.dmc.com/cache/p/a/pat13662_440x661.jpg',
			'https://static1.dmc.com/cache/p/a/pat13663_440x661.jpg',
			'https://static1.dmc.com/cache/p/a/pat13664_880x1322.jpg']);


INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (5, 'laid back hat', 'Knitting', 'Novice', 5.00,
			'Knit a warm hat for those chilly months. This beginner-friendly pattern uses Gang Collection Cuddle Me Softly yarn. This pattern, and Gang Collection Cuddle Me Softly yarn, is designed by our friends at Wool and the Gang. This knit pattern requires US size 19, or 15mm, needles.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/l/a/laid_back_hat_cms_sapphire_blue_02_440x661.jpg',
			'https://static1.dmc.com/cache/l/a/laid_back_hat_cms_softly_maroon_01_440x661.jpg',
			'https://static1.dmc.com/cache/l/a/laid_back_hat_cms_biscoti_beige_03_440x661.jpg']);


INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (7, 'imagine cushion', 'Knitting', 'Intermediate', 9.00,
			'Knit a comfy cushion to lay with while you daydream. This beginner-friendly pattern uses Gang Collection Cuddle Me Softly yarn and designed in collaboration with our friends at Wool and the Gang. This knit pattern requires US size 11, or 8mm, needles.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/i/m/imagine_cushion_cms_dusty_pink_02_440x661.jpg',
			'https://static1.dmc.com/cache/i/m/imagine_cushion_cms_winter_white_04_880x1322.jpg',
			'https://static1.dmc.com/cache/i/m/imagine_cushion_cms_storm_grey_01_440x661.jpg']);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (8, 'rocket', 'Crochet', 'Intermediate', 3.00,
			'Stitch your way to space with this fun free crochet pattern! Thread your needles and get ready for lift off with DMC’s Coton Perlé, perfect for all those mini astronauts out there. Download yours and learn something new today.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat1026_01_440x661.jpg',
			'https://static1.dmc.com/cache/p/a/pat1026_02_440x661.jpg',
			'https://static1.dmc.com/cache/p/a/pat1026_03_440x661.jpg',
      'https://static1.dmc.com/cache/p/a/pat1026_kit_440x661.jpg']);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (9, 'elephant', 'Crochet', 'Advanced', 6.59,
			'Pick up your crochet hook and craft your own adorable elephant with DMC’s fun and easy free pattern! Use the magic ring technique and single crochet to bring this animal to life. Download the pattern and get creative today.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat1071_01_880x1322.jpg',
			'https://static1.dmc.com/cache/p/a/pat1071_02_440x661.jpg',
			'https://static1.dmc.com/cache/p/a/pat1071_03_880x1322.jpg',
      'https://static1.dmc.com/cache/p/a/pat1071_04_440x661.jpg',
      'https://static1.dmc.com/cache/p/a/pat1071_05_440x661.jpg']);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (1, 'minel lace', 'Knitting', 'Beginner', 0.00,
			'Looking like a delicious meringue, this edging lace pattern will have you drooling over your finished project. Get your crochet out and download the pattern for free!',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/9/5/958_1_440x661.jpg',
'https://static1.dmc.com/cache/9/5/958_2_440x661.jpg',
'https://static1.dmc.com/cache/9/5/958_3_440x661.jpg',
'https://static1.dmc.com/cache/9/5/958_4_440x661.jpg',
'https://static1.dmc.com/cache/9/5/958_6_440x661.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (7, 'ques lace', 'Crochet', 'Expert', 0.00,
			'Lace stitching is definitely a challenge – but this white free crochet edging pattern makes it a pleasurable one. Add a lovely detail to your cushion covers using this design!',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat0955_01pat0955_440x661.jpg',
'https://static1.dmc.com/cache/p/a/pat0955_02pat0955_440x661.jpg',
'https://static1.dmc.com/cache/9/5/958_3_440x661.jpg',
'https://static1.dmc.com/cache/9/5/955_3_880x1322.jpg',
'https://static1.dmc.com/cache/p/a/pat0955_04pat0955_440x661.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (10, 'lovey tops teddy', 'Knitting', 'Advanced', 5.99,
			'Meet the Lovey Top Teddy! Lovey Tops are the perfect way to greet any new baby. This quick stitchable takes less than 2 hours to complete. The cuddly plush character has a soft hook and loop closure to hold a pacifier secure. Every member of the Lovey Tops family includes a free "Moss Stitch Lovey" knitting pattern.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/l/v/lvy18tb_index_440x661.jpg',
'https://static1.dmc.com/cache/l/v/lvy18tb_index2_440x661.jpg',
'https://static1.dmc.com/cache/l/v/lvy18tb_alt2_880x1322.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (9, 'pink angel', 'Crochet', 'Novice', 3.00,
			'Make this pretty little angel to support someone you love. Written step by step instructions and diagrams make it easy.',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/b/r/breastcancerawareness_pattern_doll_440x661.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (8, 'christmas tree card', 'Crochet', 'Beginner', 2.97,
			'Still looking for a crafty fix to spread your festive cheer? This free pattern is the perfect way to add a handmade touch this Christmas! Download it now and learn how to create your on twinkling tree in no time. Hardware not included',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat1176_01_440x661.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (1, 'cuddle-sized kozy the koala', 'Crochet', 'Novice', 4.59,
			'Meet Kozy the Koala Bear! Kozy is just like her name suggests – cozy! And cuddly too! She loves eating eucalyptus leaves and taking naps. In fact, naptime is her favorite time of the day!',
			0, false, 0, ARRAY['https://isv.prod.lovecrafts.com/v1/images/0ca88ba2b09bf991f469dd8d09379261/35c8c524-5576-4cbd-b0a4-dc78139ebaa8.jpg',
'https://isv.prod.lovecrafts.com/v1/images/1c92d95bc3667f3e4c4812d2e018f7b7/3b4686d2-84e2-4509-b46d-59edbf273c7b.jpg',
'https://isv.prod.lovecrafts.com/v1/images/d26489749dc0826133f555e3446db327/3ffd9872-12b6-49c4-903f-67850d8b5650.jpg',
'https://isv.prod.lovecrafts.com/v1/images/e570a91e5b8bb62886229209cc887693/48e44d00-3880-4511-a4ed-cf16b0cb269e.jpg',
'https://isv.prod.lovecrafts.com/v1/images/d45737cbbe67aa87dc6e8b6c948e494e/ea28e4d2-6c87-4503-a1b0-245ead80dc2c.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (2, 'boo the panda', 'Crochet', 'Intermediate', 3.80,
			'Crochet the adorable Boo the Panda cub. Can you guess how he got his name? Of course! Its from his love of bamboos! Boo also enjoys running around and playing on the forest floor.Boo the Panda measures approximately 19cm (7.5 inches) seated when made with an 8 ply (US Light Worsted / UK DK) yarn and a 3.5mm crochet hook.',
			0, false, 0, ARRAY['https://isv.prod.lovecrafts.com/v1/images/467927b56cc01d71ee8ff5d02e991d58/647e1398-a25b-494a-b08e-777cc70d470b.jpg',
'https://isv.prod.lovecrafts.com/v1/images/57c124aadd61828d0c8b590e18689f38/2aae7342-c233-4e4c-9357-7a89cd66ad05.jpg',
'https://isv.prod.lovecrafts.com/v1/images/715c2a9142504194485a455692a21f49/a7a4089d-450a-4d32-9bbb-574240bd6701.jpg',
'https://isv.prod.lovecrafts.com/v1/images/cba9ca99fcc578b3c0fa13ff376dd5b7/878febaf-4463-4571-9d55-c21dc0dec915.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (5, 'happy duck amigurumi', 'Crochet', 'Intermediate', 6.08,
			'Happy to see amigurumi, and happier to make it your own!',
			0, false, 0, ARRAY['https://isv.prod.lovecrafts.com/v1/images/ac6a0a931237b1db3848c987552cd69e/ad3bb78c-2a44-45ff-a98b-3b2939b5915b.jpg',
'https://isv.prod.lovecrafts.com/v1/images/2be4d1043cf4dbf9d7d82f4af230674f/ad523390-410a-4a8f-bacf-e2d171b6ade5.jpg',
'https://isv.prod.lovecrafts.com/v1/images/3209e6c348af846dc7ecb29c20d6341b/ba0962fd-2d07-4917-9086-df0f4b7a83ad.jpg',
'https://isv.prod.lovecrafts.com/v1/images/2467b40786dbf284e56612ac1fa96157/5ce6dae8-34cc-4cc1-adc9-0f896e18e251.jpg'
			]);

INSERT INTO public.patterns(
	author_id, title, craft_type, skill_level, price, description, likes, reported, purchased_times, images)
	VALUES (4, 'the liberty porcelain cup', 'Crochet', 'Intermediate', 6.08,
			'Stitch your own tea party with this elegant collection of embroidery patterns. This illustrative design features an ornate cup and saucer, with intricate pattern-work and gilded details. It combines our signature Stranded Cotton thread, with Diamant Grandé for added dimension and shine. Download the pattern for free and be sure to discover others in the collection!',
			0, false, 0, ARRAY['https://static1.dmc.com/cache/p/a/pat15135_880x1322.jpg',
'https://static1.dmc.com/cache/p/a/pat15134_440x661.jpg',
'https://static1.dmc.com/cache/p/a/pat15132_440x661.jpg',
'https://static1.dmc.com/cache/p/a/pat15131_440x661.jpg'
			]);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (1, 9);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (1, 2);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (2, 1);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (3, 8);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (4, 2);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (7, 9);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (5, 9);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (6, 8);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (6, 2);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (7, 1);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (7, 3);

INSERT INTO public.user_favorite(
	user_id, pattern_id)
	VALUES (2, 9);

INSERT INTO public.user_projects(
	user_id, pattern_id)
	VALUES (1, 2);

INSERT INTO public.user_projects(
	user_id, pattern_id)
	VALUES (2, 8);

INSERT INTO public.user_projects(
	user_id, pattern_id)
	VALUES (3, 9);

INSERT INTO public.user_projects(
	user_id, pattern_id)
	VALUES (3, 10);

INSERT INTO public.user_projects(
	user_id, pattern_id)
	VALUES (4, 9);

INSERT INTO public.user_projects(
	user_id, pattern_id)
	VALUES (5, 10);
