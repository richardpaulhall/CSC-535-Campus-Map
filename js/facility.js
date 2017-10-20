/*******************************
 * Facilities of SCSU *
 *******************************
 * +----------------------+
 * |       Facility       |
 * +----------------------+
 * | Name        : string |
 * | Abbreviaion : string | (generally 2 or 3 characters)
 * | Latitude    : float  |
 * | Longitude   : float  |
 * +----------------------+
 * |     (no methods)     |
 * +----------------------+
 * For the sake of simplicity, the application uses standalone functions.
 * The Facility object is used like a C structure or Pascal record.
 * The Facility objects are stored in an array. The array index for each
 * Facilty object is named 'constant'.
 *
 * var Earl_Hall = 0;
 * var facility = new Array();
 *     facility[Earl_Hall] = new Facility( "Earl Hall", "EH", 41.1, -72.1 );
 ******************************************************************************
 * possible future fields                                                     *
 ******************************************************************************
 * [(index) {name, abbreviation, lat, long, ?class?, ?sub_class?)]
 * class = [C(lassroom, P(arking, R(esidence, D(ining, A(thletic, O(ther,
 *          B(us Stop]
 * class = {C, P, R, A, O, B}
 *
 * subClass_Parking = [F(aculty, S(taff, C(ommuter, G(raduate Student, V(isitor,
                       R(esidence Hall, ?Senior Citizen? };
 * subClass_Parking = {F, S, C, G, V, R, ?X? };
 * subClass_Residence = {Hall, Complex};
 ******************************************************************************/

function Facility( name_a, abbreviation_a, latitude_a, longitude_a ) {
    this.name         = name_a;
    this.abbreviation = abbreviation_a;
    this.latitude     = latitude_a;
    this.longitude    = longitude_a;
}

//var facility = new Array( 60 );
var facility = [];

// Constants, array index for every faclity on campus
var
FACILITIES_OPERATIONS_AND_PLANNING        =  0,
ADANTI_STUDENT_CENTER                     =  1,
ETHNIC_HERITAGE_CENTER                    =  2,
LANG_HOUSE                                =  3,
ORLANDO_HOUSE                             =  4,
UNIVERSITY_POLICE                         =  5,
GRANOFF_STUDENT_HEALTH_CENTER             =  6,
OFFICE_BUILDING_1                         =  7,
TEMPORARY_BUILDING_6                      =  8,
ENERGY_CENTER                             =  9,
MOORE_FIELD_HOUSE                         = 10,
WINTERGREEN_BUILDING                      = 11,
ALUMNI_HOUSE                              = 12,

JESS_DOW_FIELD                            = 14,
SOFTBALL_FIELD                            = 15,
BASEBALL_FIELD                            = 16,
RUGBY_PRACTICE_FIELD                      = 17,
TENNIS_COURTS                             = 18,
PELZ_GYMNASIUM                            = 19,

CONNECTICUT_HALL                          = 20,

SCHWARTZ_HALL                             = 21,
BROWNELL_HALL                             = 22,
FARNHAM_HALL                              = 23,
WILKINSON_HALL                            = 24,
CHASE_HALL                                = 25,
HICKERSON_HALL                            = 26,
NEFF_HALL                                 = 27,
WEST_CAMPUS_RESIDENCE_COMPLEX             = 28,
NORTH_CAMPUS_RESIDENCE_COMPLEX            = 29,

DAVIS_HALL                                = 30,
PELZ_GYMNASIUM                            = 31,
ACADEMIC_SCIENCE_AND_LABORATORY_BUILDING  = 32,
JENNINGS_HALL                             = 33,
MORRILL_HALL                              = 34,
SCHOOL_OF_BUSINESS                        = 35,
ENGLEMAN_HALL                             = 36,
BULEY_LIBRARY                             = 37,
LYMAN_CENTER                              = 38,
EARL_HALL                                 = 39,
NURSING_CLASSROOM_BUILDING                = 40,
CLASSROOM_BUILDING_8                      = 41,

FITCH_STREET_GARAGE                       = 42,
WEST_CAMPUS_GARAGE                        = 43,
WINTERGREEN_AVENUE_GARAGE                 = 44,
P_2                                       = 45,
P_5                                       = 46,
P_12                                      = 47,
P_12B                                     = 48,
P_11                                      = 49,
P_1                                       = 50,
P_3                                       = 51,
P_8                                       = 52,
P_9                                       = 53,
P_4                                       = 54,
P_4A                                      = 55,
P_6                                       = 56,
P_10                                      = 57,

BS_1                                      = 58,
BS_2                                      = 50,
BS_3                                      = 60,
BS_4                                      = 61,
BS_5                                      = 62,
BS_6                                      = 63,
BS_7                                      = 64,
BS_8                                      = 65,
BS_9                                      = 66;

var parkingIndexRange = { min: 42, max: 57 };






/*************************/
// Other Buildings - "O" */
/*************************/
facility[ FACILITIES_OPERATIONS_AND_PLANNING ]  = new Facility( "Facilities Operations and Planning", "FO",  41.336554, -72.942012 ); // , "O", "?" );
facility[ ADANTI_STUDENT_CENTER ]               = new Facility( "Adanti Student Center",              "ASC", 41.332068, -72.948806 ); // , "O", "?" );
facility[ ETHNIC_HERITAGE_CENTER ]              = new Facility( "Ethnic Heritage Center",             "ST",  41.330147, -72.950802 ); // , "O", "?" );
facility[ LANG_HOUSE ]                          = new Facility( "Lang House",                         "LA",  41.330538, -72.952395 ); // , "O", "?" ); "Department of Social Work"
facility[ ORLANDO_HOUSE ]                       = new Facility( "Orlando House",                      "OR",  41.331814, -72.952310 ); // , "O", "?" ); "Department of Public Health"
facility[ UNIVERSITY_POLICE ]                   = new Facility( "University Police",                  "UP",  41.333821, -72.952046 ); // , "O", "?" );
facility[ GRANOFF_STUDENT_HEALTH_CENTER ]       = new Facility( "Granoff Student Health Center",      "GR",  41.333821, -72.952046 ); // , "O", "?" );
facility[ OFFICE_BUILDING_1 ]                   = new Facility( "Office Building 1",                  "OB1", 41.333597, -72.951508 ); // , "O", "?" );
facility[ TEMPORARY_BUILDING_6 ]                = new Facility( "Temporary Building 6",               "TE6", 41.333243, -72.951111 ); // , "O", "?" );
facility[ ENERGY_CENTER ]                       = new Facility( "Energy Center",                      "EC",  41.336272, -72.953171 ); // , "O", "?" );
facility[ MOORE_FIELD_HOUSE ]                   = new Facility( "Moore Field House",                  "MFH", 41.335362, -72.951411 ); // , "O", "?" );
facility[ WINTERGREEN_BUILDING ]                = new Facility( "Wintergreen Building",               "WT",  41.334532, -72.950960 ); // , "O", "?" );
facility[ ALUMNI_HOUSE ]                        = new Facility( "Alumni House",                       "AH",  41.331385, -72.951737 ); // , "O", "?" );

/*****************************/
/* Athletic Facilities - "A" */
/*****************************/
facility[ JESS_DOW_FIELD ]        = new Facility( "Jess Dow Field",       "JDF", 41.336570, -72.949974 ); // , "A", "?" );
facility[ SOFTBALL_FIELD ]        = new Facility( "Softball Field",       "SF",  41.334160, -72.943317 ); // , "A", "?" );
facility[ BASEBALL_FIELD ]        = new Facility( "Baseball Field",       "BF",  41.332543, -72.943304 ); // , "A", "?" );
facility[ RUGBY_PRACTICE_FIELD ]  = new Facility( "Rugby Practice Field", "RPF", 41.331125, -72.942886 ); // , "A", "?" );
facility[ TENNIS_COURTS ]         = new Facility( "Tennis Courts",        "TC",  41.335987, -72.952155 ); // , "A", "?" );
facility[ PELZ_GYMNASIUM ]        = new Facility( "Pelz Gymnasium",       "PE",  41.335054, -72.943925 ); // , "C", "" ); // dupe

/**************************/
/* Dining Locations - "D" */
/**************************/
facility[ CONNECTICUT_HALL ] = new Facility( "Connecticut Hall", "CO", 41.332588, -72.950222 ); // , "D", "?" );
///facility[  ] = new Facility( "Connecticut Hall", "CO) - Food Service Office---------41.332588, -72.950222
// -Other dining locations are inside of other buildings

/*****************************/
/* Residence Locations - "R" */
/*****************************/
facility[ SCHWARTZ_HALL ]                   = new Facility( "Schwartz Hall",                  "SZ", 41.331464, -72.950174 ); // , "R", "H" );
facility[ BROWNELL_HALL ]                   = new Facility( "Brownell Hall",                  "BR", 41.331668, -72.953840 ); // , "R", "H" );
facility[ FARNHAM_HALL ]                    = new Facility( "Farnham Hall",                   "FH", 41.332570, -72.951887 ); // , "R", "H" );
facility[ WILKINSON_HALL ]                  = new Facility( "Wilkinson Hall",                 "WI", 41.332707, -72.952692 ); // , "R", "H" );
facility[ CHASE_HALL ]                      = new Facility( "Chase Hall",                     "CH", 41.333158, -72.952671 ); // , "R", "H" );
facility[ HICKERSON_HALL ]                  = new Facility( "Hickerson Hall",                 "HI", 41.333915, -72.953100 ); // , "R", "H" );
facility[ NEFF_HALL ]                       = new Facility( "Neff Hall",                      "NE", 41.333931, -72.953733 ); // , "R", "H" );
facility[ WEST_CAMPUS_RESIDENCE_COMPLEX ]   = new Facility( "West Campus Residence Complex",  "WC", 41.334490, -72.953666 ); // , "R", "C" );
facility[ NORTH_CAMPUS_RESIDENCE_COMPLEX ]  = new Facility( "North Campus Residence Complex", "NC", 41.338048, -72.947313 ); // , "R", "C" );

///facility[  ] = new Facility( "Schwartz Hall","SZ) - Housing Office-------41.331464, -72.950174

/****************************/
/* Classroom Buildings -"C" */
/****************************/
facility[ DAVIS_HALL ]                                = new Facility( "Davis Hall",                               "DA",  41.335344, -72.941972 ); // , "C", "" );
facility[ PELZ_GYMNASIUM ]                            = new Facility( "Pelz Gymnasium",                           "PE",  41.335054, -72.943925 ); // , "C", "" );
facility[ ACADEMIC_SCIENCE_AND_LABORATORY_BUILDING ]  = new Facility( "Academic Science and Laboratory Building", "ASL", 41.334780, -72.945652 ); // , "C", "" );
facility[ JENNINGS_HALL ]                             = new Facility( "Jennings Hall",                            "JE",  41.334095, -72.945164 ); // , "C", "" );
facility[ MORRILL_HALL ]                              = new Facility( "Morrill Hall",                             "MO",  41.333732, -72.945899 ); // , "C", "" );
facility[ SCHOOL_OF_BUSINESS ]                        = new Facility( "School of Business",                       "SB",  41.331690, -72.945438 ); // , "C", "" );
facility[ ENGLEMAN_HALL ]                             = new Facility( "Engleman Hall",                            "EN",  41.332636, -72.946645 ); // , "C", "" );
facility[ BULEY_LIBRARY ]                             = new Facility( "Buley Library",                            "BU",  41.333051, -72.947873 ); // , "C", "" );
facility[ LYMAN_CENTER ]                              = new Facility( "Lyman Center",                             "LY",  41.331484, -72.946736 ); // , "C", "" );
facility[ EARL_HALL ]                                 = new Facility( "Earl Hall",                                "EA",  41.331915, -72.947873 ); // , "C", "" );
facility[ NURSING_CLASSROOM_BUILDING ]                = new Facility( "Nursing Classroom Building",               "NU",  41.335916, -72.941972 ); // , "C", "" );
facility[ CLASSROOM_BUILDING_8 ]                      = new Facility( "Classroom Building 8",                     "TE8", 41.331754, -72.945057 ); // , "C", "" );

/***************************/
/* Parking Locations - "P" */
/***************************/
// Parking Garaes
facility[ FITCH_STREET_GARAGE ]       = new Facility( "Fitch Street Garage", "FSG", 41.335739, -72.943029 ); // , "P", "FSCGV" );
facility[ WEST_CAMPUS_GARAGE ]        = new Facility( "West Campus Garage", "WCG", 41.333158, -72.953722 ); // , "P", "CRG" );
facility[ WINTERGREEN_AVENUE_GARAGE ] = new Facility( "Wintergreen Avenue Garage", "WTG", 41.335601, -72.953033 ); // , "P", "FSRCGV" );

// Faculty and Staff Parking
facility[ P_2 ]                       = new Facility( "P-2",   "P-2",   41.334100, -72.946688 ); // , "P", "FS" );
facility[ P_5 ]                       = new Facility( "P-5",   "P-5",   41.331441, -72.948425 ); // , "P", "FS" );
facility[ P_12 ]                      = new Facility( "P-12",  "P-12",  41.331139, -72.944793 ); // , "P", "FS" );
facility[ P_12B ]                     = new Facility( "P-12B", "P-12B", 41.331643, -72.944562 ); // , "P", "FS" );
facility[ P_11 ]                      = new Facility( "P-11",  "P-11",  41.331079, -72.950377 ); // , "P", "FS" );

// Graduate Student Parking
facility[ P_1 ]                       = new Facility( "P-1",  "P-1",    41.335240, -72.942781 ); // , "P", "G" );

// Commuter Student Parking
facility[ P_3 ]                       = new Facility( "P-3",  "P-3",    41.331976, -72.951238 ); // , "P", "C" );
facility[ P_8 ]                       = new Facility( "P-8",  "P-8",    41.329688, -72.952969 ); // , "P", "C" );
facility[ P_9 ]                       = new Facility( "P-9",  "P-9",    41.330643, -72.953992 ); // , "P", "C" );

// Residence Hall Students Parking
facility[ P_4 ]                       = new Facility( "P-4",  "P-4",    41.332156, -72.952993 ); // , "P", "R" );
facility[ P_4A ]                      = new Facility( "P-4A", "P-4A",   41.331672, -72.952651 ); // , "P", "R" );
facility[ P_6 ]                       = new Facility( "P-6",  "P-6",    41.334564, -72.954111 ); // , "P", "R" );
facility[ P_10 ]                      = new Facility( "P-10", "P-10",   41.330466, -72.950805 ); // , "P", "R" );

//-Unable to find lot P-7 on school PDF map
// P-7 was a surface lot where the Wintergreen Avenue Garage resides

/**************************/
/* Shuttle Bus Stops -"B" */
/**************************/
facility[ BS_1 ] = new Facility( "BS-1", "BS-1",   41.331026, -72.953566 ); // , "B", "" );
facility[ BS_2 ] = new Facility( "BS-2", "BS-2",   41.329837, -72.953427 ); // , "B", "" );
facility[ BS_3 ] = new Facility( "BS-3", "BS-3",   41.334101, -72.946416 ); // , "B", "" );
facility[ BS_4 ] = new Facility( "BS-4", "BS-4",   41.333494, -72.953160 ); // , "B", "" );
facility[ BS_5 ] = new Facility( "BS-5", "BS-5",   41.334918, -72.952574 ); // , "B", "" );
facility[ BS_6 ] = new Facility( "BS-6", "BS-6",   41.337109, -72.946889 ); // , "B", "" );
facility[ BS_7 ] = new Facility( "BS-7", "BS-7",   41.331520, -72.945624 ); // , "B", "" );
facility[ BS_8 ] = new Facility( "BS-8", "BS-8",   41.335137, -72.943175 ); // , "B", "" );
facility[ BS_9 ] = new Facility( "BS-9", "BS-9",   41.335624, -72.942400 ); // , "B", "" );

//Connecticut Transit Bus Stops -"T"
