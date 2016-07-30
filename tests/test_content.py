
import unittest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.common.exceptions import NoSuchElementException

from time import sleep

class TestContent(unittest.TestCase):
    
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
        sleep(15)
        self.article_item = self.driver.find_elements_by_class_name("article_item")[-1]
    
    def tearDown(self):
        self.driver.quit()

    def test_content_add(self):
        sleep(2)
        self.article_item.find_element_by_class_name("dropdown-toggle").click()
        sleep(5)
        self.article_item.find_element_by_class_name("dropdown-menu").find_element_by_tag_name("a").click()
        sleep(2)
        title = self.driver.find_element_by_class_name("input-group").find_element_by_tag_name("input")
        title.send_keys("Content add test title")
        editor = self.driver.find_element_by_class_name("editor-editable")
        editor.send_keys("This is content")
        self.driver.find_element_by_class_name("dropdown-toggle").click()
        sleep(2)
        self.driver.find_element_by_id("state-list").find_element_by_tag_name("a").click()
        self.driver.find_element_by_id("submit").click()
        sleep(2)

        self.driver.find_element_by_link_text("List articles").click()
        sleep(2)
        self.driver.find_element_by_class_name("section-select-box").find_elements_by_tag_name("a")[1].click()
        sleep(2)
        self.article_item = self.driver.find_elements_by_class_name("article_item")[-1]

        self.assertEqual(len(self.article_item.find_element_by_class_name("content-list").find_elements_by_tag_name("a")), 2)
