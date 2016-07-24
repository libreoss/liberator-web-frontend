
import unittest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.common.exceptions import NoSuchElementException

class TestLogin(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://0.0.0.0/#/auth/login")
    def test_fields_exist(self):
        elem = None
        try:
            elem = self.driver.find_element_by_name("loginForm")
        except NoSuchElementException:
            self.fail("Form not found")
