Feature: Rest

    Scenario: Get the information about Europe in JSON format
        When user wants to get information about Europe
        Then the response data is returned on JSON format