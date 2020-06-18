package com.agilesolutions.boot.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class CarDto {

	private long id;
	private String brand, model, color;
	private int year, price;
	
}
