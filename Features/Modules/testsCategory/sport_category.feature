Feature: Sport category

    Scenario:
	
	Given there is a list of three subcategories
	When I click on one of these subcategories 
	Then I should have an opportunity to choose one of the tests of this category:
		| ��������� |
		| �����     |
		| ������    |

    Scenario:

	Given first subcategory "���������"
	When I click on
	Then I will have a list of 5 tests:
		| ������� ���������� ����1 |
		| Highway code             |
		| ������� ���������� ����2 |
		| ������� ���������� ����3 |
		| ������� ���������� ����4 |
	And I can pass any test 

    Scenario:

	Given second subcategory "�����"
	When I click on
	Then I will have a list of 17 tests:
		| ������� ���������� ����1  |
		| Highway code              |
		| ������� ���������� ����2  |
		| ������� ���������� ����3  |
		| ������� ���������� ����4  |
		| ������� ���������� ����5  |
		| ������� ���������� ����6  |
		| ������� ���������� ����7  |
		| ������� ���������� ����8  |
		| ������� ���������� ����9  |
		| ������� ���������� ����10 |
		| ������� ���������� ����11 |
		| ������� ���������� ����12 |
		| ������� ���������� ����13 |
		| Test0                     |
		| Test1                     |
		| Test2                     |
	And I can pass any test 

    Scenario:

	Given third subcategory "������"
	When I click on
	Then I will have a list of 3 tests:
		| ������� ���������� ����1 |
		| Highway code             |
		| ������� ���������� ����2 |
	And I can pass any test 