Feature: category statistic tabs

    Scenario:
	
	Given there are and option list and tabs
	When I click on one of these tabs 
	Then I should have to see a graph or a table
		
    Scenario:

	Given first tab "�����"
	When I click on
	Then I will have a graph of categories
	

    Scenario:

	Given second tab of "����"
	When I click on
	Then I will have a graph of average mark of all tests
	
	Scenario:

	Given third tab of "����/³�"
	When I click on
	Then I will have a graph of time and age of all tests
	
	Scenario:

	Given third tab of "����/������"
	When I click on
	Then I will have a graph of time and stage of all tests
	
	Scenario:

	Given third tab of "ʳ������ �����"
	When I click on
	Then I will have a table of top 10 tests with attemps
	And I can visit a page of proper test
	
	Scenario:

	Given third tab of "�������� ���"
	When I click on
	Then I will have a table of top 10 attemps wit average mark
	And I can visit a page of proper test