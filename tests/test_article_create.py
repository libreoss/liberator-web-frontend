
import unittest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.common.exceptions import NoSuchElementException

from time import sleep

class TestArticleCreate(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://0.0.0.0/")
        elem = self.driver.find_element_by_name("loginForm")
        username = elem.find_elements_by_tag_name("input")[0]
        password = elem.find_elements_by_tag_name("input")[1]
        username.send_keys("admin@liberator.org")
        password.send_keys("Sekrit")
        submit = self.driver.find_element_by_tag_name("button")
        submit.click()
        sleep(2)
    
    def tearDown(self):
        self.driver.quit()

    def test_fields_exist(self):
        elem = None
        try:
            elem = self.driver.find_element_by_link_text("Create article")
        except NoSuchElementException:
            self.fail("Menu item not found")

    def test_create_with_one_author_no_issue(self):
        elem = self.driver.find_element_by_link_text("Create article")
        elem.click()
        sleep(2)
        sections = self.driver.find_element_by_id("section-selector")
        sections.find_elements_by_tag_name("button")[0].click()

        authors = self.driver.find_element_by_id("author-selector")
        authors.find_elements_by_tag_name("button")[0].click()

        self.driver.find_element_by_id("submit").click()
        sleep(2)
        self.driver.find_element_by_link_text("List articles").click()
        sleep(2)
        self.driver.find_element_by_class_name("section-select-box").find_elements_by_tag_name("a")[1].click()
        sleep(2)

        self.assertGreater(len(self.driver.find_elements_by_class_name("article_item")), 0)
    
    def test_create_with_one_author_one_issue(self):
        elem = self.driver.find_element_by_link_text("Create article")
        elem.click()
        sleep(2)
        sections = self.driver.find_element_by_id("section-selector")
        sections.find_elements_by_tag_name("button")[0].click()

        authors = self.driver.find_element_by_id("author-selector")
        authors.find_elements_by_tag_name("button")[0].click()
        
        issues = self.driver.find_element_by_id("issue-selector")
        issues.find_elements_by_tag_name("button")[0].click()

        self.driver.find_element_by_id("submit").click()
        sleep(2)
        self.driver.find_element_by_link_text("List articles").click()
        sleep(2)
        self.driver.find_element_by_class_name("section-select-box").find_elements_by_tag_name("a")[1].click()
        sleep(2)

        self.assertGreater(len(self.driver.find_elements_by_class_name("article_item")), 0)
