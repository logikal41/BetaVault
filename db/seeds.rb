# Users
# admin 
# User.create(confirmed_at: Time.now, name: "Admin", email: "admin@test.com", password: "password", role: "admin")
User.create(name: "Admin", email: "admin@test.com", password: "password");
# user
# User.create(confirmed_at: Time.now, name: "User", email: "user@test.com", password: "password", role: "user")

# Create Group
Vault.create(name: 'San Rafael Swell - North', description: 'All the information on the northern San Rafael Swell.');

# Areas in the North Swell
Area.create(vault_id: 1, name: 'Buckhorn Wash', description: 'Buckhorn Wash descends north to south from younger to older strata of sedimentary rock. It begins with Carmel Sandstone (the equivalent of the Dewey Bridge...');
Area.create(vault_id: 1, name: 'Mexican Mountain Road', description: 'Mexican Mountain Road begins just north of the bridge over the San Rafael River and runs east for approximately 14 miles (23km).');
Area.create(vault_id: 1, name: 'Mexican Mountain Area', description: 'Mexican Mountain Area is at the eastern end of Mexican Mountain Road. From Mile Post 137 on I-70 (left to right), Triple Towers...');
Area.create(vault_id: 1, name: 'River Bridge West', description: 'River Bridge West is west of the campground and the bridge over the San Rafael River.');
Area.create(vault_id: 1, name: 'Road Draw, Oil Well Flat Road', description: 'Road Draw and Oil Well Flat Road is the region east and west of Cottonwood Wash Road, from Bottleneck Peak to Pinnacle.');
Area.create(vault_id: 1, name: 'Head of Sinbad North, Eagle Canyon Area', description: 'Climbs at Head of Sinbad North are in the central San Rafael Swell and are reached from I-70 between Mile Post 122-123.');

# Walls in each area
Wall.create(area_id: 1, name: 'Scenic Byway Wall', description: 'Routes on Scenic Byway Wall climb Navajo Sandstone facing northeast and are shaded during hot summer afternoons.');
Wall.create(area_id: 1, name: 'Anti-Swell, Bradley Mountain Wear', description: 'Anti-Swell is on the west side of Buckhorn Wash, 0.2 mile south (0.3km) of Scenic Byway Wall.');
Wall.create(area_id: 1, name: 'Outhouse Tower, Home Haunt', description: ' Approximately 2.4 miles (3.8km) toward the San Rafael River from the Scenic Byway Wall a sign reads...');
Wall.create(area_id: 1, name: 'Middle Buckhorn Wash', description: 'Approximately 0.6 miles south (0.9km) of Outhose Tower a sign reads: "Buckhorn Wash Pictograph Panel-Drive Slowly 500 ft."' );
Wall.create(area_id: 1, name: 'Chocolate Wall', description: 'Chocolate Wall is north and across from Pine Canyon, on the right side of the second drainage north of Kent\'s Hand Crack. Routes are listed left to right.');
Wall.create(area_id: 1, name: 'Pine Canyon Wall', description: 'Pine Canyon Wall is reached from a 4-wheel drive track 0.5 mile east (0.8km) up Pine Canyon from Buckhorn Wash.');
Wall.create(area_id: 1, name: 'Lower Buckhorn Wash', description: 'Lower Buckhorn Wash climbs are on east and west walls south of Pine Canyon.');
Wall.create(area_id: 1, name: 'April Fool\'s Wall', description: 'Approximately 0.5 mile south (0.8km) of Kent\'s Hand Crack a sign reads: "Moenkopi Formation."');
Wall.create(area_id: 1, name: 'Sex Wall', description: 'Sex Wall is the buttress south of April Fool\'s Wall on the same (east) side of Buckhorn Wash.');
Wall.create(area_id: 1, name: 'Lower Buckhorn Wash West', description: 'Lower Buckhorn Wash West routes are on the west side of Buckhorn Wash south of Kent\'s Hand Crack.');

Wall.create(area_id: 2, name: 'Bad Obsession Buttress', description: ' Bad Obsession Buttress is the south-facing wall above the San Rafael River west of the bridge at the south entrance...');
Wall.create(area_id: 2, name: 'Dylan Wall', description: 'For years Dylan Wall has been the private sanctuary of a small fraternity of climbers who furtively visited this Wingate Shangri-la.');
Wall.create(area_id: 2, name: 'Stock Exchange Wall', description: 'Stock Exchange Wall is the Wingate buttress east of Dylan Wall.');
Wall.create(area_id: 2, name: 'Red Canyon, Emotional Wall', description: 'Red Canyon is east of Stock Exchange Wall. To reach, drive 4.6 miles (7.4km) down Mexican Mountain Road ...');
Wall.create(area_id: 2, name: 'Red Canyon, Spaghetti Western Wall', description: 'Spaghetti Western Wall is on the west side of Red Canyon. To reach, continue upcanyon past Emotional Wall to...');

Wall.create(area_id: 3, name: 'Lone Rock', description: 'Lone Rock is a Wingate Sandstone peak with a Kayenta caprock, designated 6145 on the USGS Mexican Mountain quadrange...');
Wall.create(area_id: 3, name: 'Peak 6333', description: 'Peak 6333 is the next landform west of Lone Rock and is designated on the USGS Devils Hole Quadrange (7.5 minute topographic series).');
Wall.create(area_id: 3, name: 'Triple Towers', description: 'Triple Towers are in the Sulphur Canyon, approximately one mile (1.6km) west of Lone Rock. The spires are in view north...');
Wall.create(area_id: 3, name: 'Mexican Mountain', description: 'Mexican Mountain is designated on the USGS Mexican Mountain Quadrange (7.5 minute topographic series). To approach....');

Wall.create(area_id: 4, name: 'Trojan Man Wall', description: 'Trojan Man is upriver (west) from the bridge over the San Rafael River. To reach, drive 0.4 mile south....');
Wall.create(area_id: 4, name: 'Sand Worm Buttress, Petrified Wood Tower', description: 'Drive to the parking area for Trojan Man Wall, then hike west along the path on the south side of the San Rafael...');
Wall.create(area_id: 4, name: 'Halloween Wall', description: 'Halloween Wall is the Wingate buttress west of Bottleneck Peak. Either approach by traversing west...');

Wall.create(area_id: 5, name: 'Bottleneck Peak', description: 'Bottleneck Peak is the commanding landform 6235 feet in elevation (1900m) to the right of the road when viewing south from the San Rafael River.');
Wall.create(area_id: 5, name: 'Assembly Hall Peak (Northwest Face', description: 'Assembly Hall Peak is 6395 feet in elevation (1949m) and dominates the view left of the road when looking due south from the San...');
Wall.create(area_id: 5, name: 'Window Blind Peak', description: 'Window Blind Peak is the major landform 1.5 miles (2.4km) due south of Assembly Hall Peak on the same (east) side of the road when traveling south...');
Wall.create(area_id: 5, name: 'Mother Hubbard\'s Shoe', description: 'The landform is designated 6365 on the USGS Bottleneck Peak Quadrange (7.5 minute topographic series). It is 0.5 miles north...');
Wall.create(area_id: 5, name: 'Weasel, Breezeway, Pinnacle', description: 'Pinnacle is designated on the USGS Wickiup Quadrange as elevation 7010 (7.5 minute topographic series). THere is a USGS benchmark...');
Wall.create(area_id: 5, name: 'Devils Monument, Phred Phlinstone', description: 'Devils Monument is designated on the USGS Devils Monument Quadrange (7.5 minute topographic series). It is approximately....');

Wall.create(area_id: 6, name: 'Chimney Rock', description: 'Chimney Rock is a large dome north of I-70 (northwest of the exit between Mile Post 122-123). To reach, exit I-70 between mile post....');
Wall.create(area_id: 6, name: 'Scallyway Point, Mustard Jar, Twin Raven', description: 'Twin Raven is the most prominent of these landforms and is in view 0.75 mile (1.2km) north of I-70 from Mile Post 123.');
Wall.create(area_id: 6, name: 'Sandcastle, Outpost, Secret Pillar', description: 'Sandcastle and Outpost are on a ridge between Cane Wash and Oil Well Flat. To reach, exit I-70 between Mile Post 122-123.');
Wall.create(area_id: 6, name: 'White Knight, Mother Goose', description: 'White Knight is approximately 1 mile (1.6km) north of I-70. The landform may be identified by a small tree at the center...');

# Routes at each wall
Route.create(wall_id: 1, name: 'Scenic Byway', difficulty: '5.10', pitch: 4, length: '400 feet', rating: 4, first_ascent: 'James Garrett, Franziska Garret, 1992', 
    description: 'Scenic Byway climbs to the rim and is in the center of a black wall with two chains visible at the top of Pitch 1. Rappel slings are visible at the top of 
    pitches 2, 3, and 4. Mike Friedrichs: "Pitch 1 is the best 5.9 handcrack in the swell."', gear: 'Standard desert rack; (1) set of TCUs; #1.5 through #3 Friends for Pitch 1; #6 
    Friend for the offwidth of Pitch 2; (2) quickdraws', descent: 'Rappel the route.');
Route.create(wall_id: 1, name: 'Metacarpal Road Map', difficulty: '5.9', pitch: 2, length: '180 feet', rating: 1, first_ascent: 'James Garrett, Franziska Garret, 1992', 
    description: 'Metacarpal Road Map ascends hands-to-fingers to a roof. Pitch 1: Begin as for Scenic Byway, then climb for 20 feet (6m) and traverse right to a bush',
    gear: 'One set of Friends with double #1 through #3.5', descent: 'Rappel the route.');
Route.create(wall_id: 1, name: 'Lonesome Scenery', difficulty: '5.12a', pitch: 1, length: '75 feet', rating: 0, first_ascent: 'Mike Friedrichs, Joe Cupps, 1993',
    description: 'Lonesome Scenery is 15 feet left of Scenic Highway. The route climbs to a bolt, then traverses right to the top of Scenic Highway. Rappel slings are visible from below.',
    gear: 'TCUs; small nuts; (1) quickdraw', descent: 'Rappel the route.');
Route.create(wall_id: 1, name: 'Scenic Highway', difficulty: '5.8', pitch: 1, length: '75 feet', rating: 1, first_ascent: 'James Garrett, Franziska Garrett, 1992',
    description: 'Scenic Highway is 15 feet right of Lonesome Scenery. It curves up a flake with a handcrack that ends at a ceiling and a 2-bolt anchor.',
    gear: 'Standard desert rack', descent: 'Rappel the route.');

Route.create(wall_id: 2, name: 'Anti-Swell', difficulty: '5.10b', pitch: 1, length: '60 feet', rating: 0, first_ascent: 'Mike Friedrichs, Todd Leeds 1995',
    description: 'Anti-Swell is a sport route beginning above a good-sized talus cone/boulder field. Climb the left wall of a large left-facing dihedral on the west side of the road.
    Face climb to rappel anchors visible from below.', gear: 'Eight quickdraws', descent: 'Rappel the route from double-bolts.');
Route.create(wall_id: 2, name: 'Bradley Mountain Wear', difficulty: '5.11d', pitch: 1, length: '165 feet', rating: 1, first_ascent: 'Mike Friedrichs, Todd Leeds, February 1995',
    description: 'This sport climb is left of a chimney system above large boulders positioned on a talus slope at the right end of a buttress on the east side of Buckhorn Wash,
    south of Anti-Swell....', gear: 'Fifteen quickdraws', descent: 'One double-rope rappel from three bolts.');

Route.create(wall_id: 3, name: 'Outhouse Tower - Chopped Sand', difficulty: '5.8 A0', pitch: 1, length: '160 feet', rating: 0, first_ascent: 'James Garrett, solo 1990.',
    description: 'Chopped Sand begins beyond the left profile of the landform when viewed from the road, then climbs a ridge and finally a large summit block (Outhouse Tower).',
    gear: 'One set of Friends', descent: 'Rappel the route.');
Route.create(wall_id: 3, name: 'Home Haunt', difficulty: '5.10 A1', pitch: 3, length: '160 feet', rating: 0, first_ascent: 'James Garrett, Franziska Garrett, 9 October 1996',
    description: 'Home Haunt is the next landform south of Outhouse Tower, 200 feet. The landform is 25 feet from the east side of the road...',
    gear: 'Standard desert rack; a few Lost Arrows; (4) quickdraws', descent: 'Walk off to the left approximately 1500 feet.');

Route.create(wall_id: 4, name: 'Street Legal', difficulty: '5.11', pitch: 1, length: '80 feet', rating: 5, first_ascent: 'Mike Friedrichs, Mary Ellen Gage, Gene Roush, 1990',
    description: 'Street Legal is 15 feet left of BBQ Bomber. The route climbs a right-facing dihedral to rappel slings visible on the left wall below a prominent overhang.',
    gear: 'Friends (1) #2.5; TCUs', descent: 'Rappel the route.');
Route.create(wall_id: 4, name: 'BBQ Bomber', difficulty: '5.11', pitch: 1, length: '155 feet', rating: 5, first_ascent: 'Names withheld by request of first ascent party.',
    description: 'BBQ Bomber is plaqued with the date 3/90. Begin in a left-facing dihedral left of a large fallen pillar. Climbe to a ledge right of a prominent cieling...',
    gear: 'Friends (2-3) #0.5, (2) #1, (5) #1.5, (3) #2, (1) #2.5, #3, (2-3) #3.5, (3) #4', descent: 'Rappel the route from the top of the climb or traverse 30 feet right and rappel from slings visible from below.');
Route.create(wall_id: 4, name: 'Ladies of the 80s', difficulty: 'A2+ / C1', pitch: 1, length: '130 feet', rating: 0, first_ascent: 'Rob McKeracher, Matt Fetbrod, 29 April 1996',
    description: 'Ladies of the 80s climbs a uniform 0.25-inch splitter crack right of a fallen pillar (right of BBQ Bomber) to a three-piton rappel station...',
    gear: 'For clean aid (to avoid excessive nailing, especially on the first 30 feet) bring (5-10) large Lowe Balls; (10) #0 TCUs, a few Blue Aliens, (1) medium Leeper Z-ton; quickdraws',
    descent: 'One double-rope rappel down the route');




# Route.create(wall_id: 4, name: '', difficulty: '', pitch: 1, length: '', rating: 1, first_ascent: '',
#     description: '', gear: '', descent: '');