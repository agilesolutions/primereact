package com.agilesolutions.boot;

import static net.logstash.logback.argument.StructuredArguments.kv;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.agilesolutions.boot.controller.CarController;
import com.agilesolutions.boot.model.Car;
import com.agilesolutions.boot.repository.CarRepository;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private CarRepository carRepository;

	private static final Logger logger = LoggerFactory.getLogger(CarController.class);
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {


			logger.info("Added owners",  kv("type", "SAL"));

//			carRepository.save(new Car("Ford", "Mustang", "Red", 2017, 59000));
//			carRepository.save(new Car("Nissan", "Leaf", "White", 2014, 29000));
//			carRepository.save(new Car("Toyota", "Prius", "Silver", 2018, 39000));
			logger.info("Added owners",  kv("type", "SAL"));

		};
	}

}
