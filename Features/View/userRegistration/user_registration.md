Feature: User registration

    As a Guest I need to be able to use sign up ( registration ) dialog 
    I order to be able to become registered in the system and have my information present there

    Scenario: Registration form to become a user
        
        Given I see a registration form 
	When I fill in all inputs 
	Then I can sign up or return to main page

    Scenario:

	Given button for registration "���������"
	When I click on this button
	Then I should see a home page
    
    Scenario:

	Given button for registration cancel "³������"
	When I click on this button
	Then I should see a home page


    Scenario: 

	Given input field for a name "��'�"
	When I input a name 
	Then there should be a name

   
    Scenario:

	Given required input field for a username "������"
	When I  input a username
	Then there should be a nickname

    Scenario:

	Given required input field for a password "������"
	When I input a password
	Then there should be correctly entered password

    Scenario:

	Given input field for a plast region "�������"
	When I input a name of the plast region
	Then there should be the name of the plast region

    Scenario:

	Given input field for plast hovel "��������� �����"
	When I input a plast hoven
	Then there should be a plast hoven 
 
    Scenario:

	Given required input field for birth date "���� ����������"
	When I input a day of birth or choose it in the calendar
	Then there should be a day of birth

    Scenario:

	Given drop-down list of plast degree "��������� ������"
	When I choose a degree
	Then there should be a degree I've chosen
  
    Scenario:

	Given drop-down list of groups "������"
	When I choose a group
	Then there should be a group name

    Scenario:

	Given required input field for an e-mail "�-���"
	When I input an e-mail
	Then there should be correctly entered e-mail