package com.agilesolutions.boot.mappers;

import com.agilesolutions.boot.dto.CarDto;
import com.agilesolutions.boot.model.Car;

public class CarMapper implements ObjectMapper<Car, CarDto>{

	@Override
	public CarDto mapToDto(Car modelObject) {
		// and so on ....
		return CarDto.builder().id(modelObject.getId()).brand(modelObject.getBrand()).build();
	}

	@Override
	public Car mapFromDto(CarDto dto) {
		// and so on ....
		return Car.builder().id(dto.getId()).brand(dto.getBrand()).build();
	}

}
