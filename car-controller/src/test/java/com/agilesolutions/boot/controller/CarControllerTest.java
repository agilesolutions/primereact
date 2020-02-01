package com.agilesolutions.boot.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = CarController.class)
@ActiveProfiles("test")
public class CarControllerTest {

	@Autowired
	private MockMvc mockMvc;

    @Autowired
    RestTemplate restTemplate;	

	@Test
	public void testShowVersion() throws Exception {

		this.mockMvc.perform(get("/api/version")).andExpect(status().isOk());
	}
	
	
	 @Test
	    public void testGetcars() throws Exception {
		 
			this.mockMvc.perform(get("http://localhost:8080/api/Car/1")).andExpect(status().isOk());
		 
	    }
}