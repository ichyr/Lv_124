Feature: Computers category

    Scenario:
	
	Given there is a list of three subcategories
	When I click on one of these subcategories 
	Then I should have an opportunity to choose one of the tests of this category:
		| ���������� |
		| ���������� |
		| ���������� |

    Scenario:

	Given first subcategory "���������"
	When I click on
	Then I will have a list of 3 tests:
		| ������� ���������� ����1 |
		| Highway code             |
		| ������� ���������� ����2 |
	And I can pass any test 

    Scenario:

	Given second subcategory "�����"
	When I click on
	Then I will have a list of 4 tests:
		| ������� ���������� ����1  |
		| Highway code              |
		| ������� ���������� ����2  |
		| ������� ���������� ����3  |
	And I can pass any test 

    Scenario:

	Given third subcategory "������"
	When I click on
	Then I will have a list of 2 tests:
		| ������� ���������� ����1 |
		| Highway code             |
	And I can pass any test 