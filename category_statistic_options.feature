Feature: category statistic options

    Scenario:
	
	Given there are and option list and tabs
	When I click on option lists
		|³�		|
		|������	|
		|³�		|
		|��			|
	And I click on "����������� ������" button
	Then I should have to see a graph or a table
		
    Scenario:

	Given "³�" option
	When I click on
	And if "����/³�" tab is selected
	Then I will have a graph of time and age of all tests
	
	Scenario:

	Given "������" option
	When I click on
	And if "����/������" tab is selected
	Then I will have a graph of time and stage of all tests
	
	Scenario:

	Given "³�" and "��" options
	When I click on
	Then I will see a pop-up calendar
	And I will choose a date

