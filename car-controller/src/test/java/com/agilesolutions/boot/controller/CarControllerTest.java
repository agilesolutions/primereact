package com.agilesolutions.boot.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.junit.Assert.assertNotNull;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.agilesolutions.boot.model.Car;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = CarController.class)
@ActiveProfiles("test")
public class CarControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private TestRestTemplate restTemplate;	
	
	private String getRootUrl() {
        return "http://localhost:8080/api/v1";
    }


	@Test
	public void testShowVersion() throws Exception {

		this.mockMvc.perform(get("/api/version")).andExpect(status().isOk());
	}
	
	
	 @Test
	    public void testGetcars() throws Exception {
	        ResponseEntity<Car> postResponse = restTemplate.getForEntity("http://localhost:8080/api/Car/1", Car.class);
	        assertNotNull(postResponse);
	        assertNotNull(postResponse.getBody());
	    }
}