# 
# Fishingbooker book a fishing trip feature
# fishingbooker_book_a_fishing_trip.feature
# 


Feature: Book a fishing trip

     I should be able to book a Single Fisherman Special for
     1 day for the first free date between January and June 2022 

    Scenario: Book a Single Fisherman Special for 1 day for the first free date between January and June 2022
        Given I am on Pike Predator Tour charter page
        When I book Single Fisherman Special
        Then I should see notification that my booking is confirmed
        And I should get booking number
       