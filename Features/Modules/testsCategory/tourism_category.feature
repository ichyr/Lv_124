Feature: Tourism category

    Scenario:
	
	Given there is a list of three subcategories
	When I click on one of these subcategories 
	Then I should have an opportunity to choose one of the tests of this category:
		| ���������� |
		| ���������� |
		| �����       |

    Scenario:

	Given first subcategory "����������"
	When I click on
	Then I will have a list of 8 tests:
		| ������� ���������� ����1 |
		| Highway code             |
		| ������� ���������� ����2 |
		| ������� ���������� ����3 |
		| ������� ���������� ����4 |
		| ������� ���������� ����5 |
		| ������� ���������� ����6 |
		| ������� ���������� ����7 |
	And I can pass any test 

    Scenario:

	Given second subcategory "�����"
	When I click on
	Then I will have a list of 5 tests:
		| ������� ���������� ����1  |
		| Highway code              |
		| ������� ���������� ����2  |
		| ������� ���������� ����3  |
		| ������� ���������� ����4  |
	And I can pass any test 

    Scenario:

	Given third subcategory "������"
	When I click on
	Then I will have a list of 2 tests:
		| ������� ���������� ����1 |
		| Highway code             |
	And I can pass any test 