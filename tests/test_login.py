
import unittest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.common.exceptions import NoSuchElementException

from time import sleep

class TestLogin(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://0.0.0.0/#/auth/login")
    
    def tearDown(self):
        self.driver.quit()

    def test_fields_exist(self):
        elem = None
        try:
            elem = self.driver.find_element_by_name("loginForm")
        except NoSuchElementException:
            self.fail("Form not found")

    def test_login(self):
        elem = self.driver.find_element_by_name("loginForm")
        username = elem.find_elements_by_tag_name("input")[0]
        password = elem.find_elements_by_tag_name("input")[1]

        username.send_keys("admin@liberator.org")
        password.send_keys("Sekrit")

        submit = self.driver.find_element_by_tag_name("button")
        submit.click()
        sleep(2)
        self.assertIn("Hello from scope", self.driver.page_source)

