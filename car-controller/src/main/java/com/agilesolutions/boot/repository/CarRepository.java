package com.agilesolutions.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.agilesolutions.boot.model.Car;
import com.agilesolutions.boot.model.CarGraph;

@RepositoryRestResource
public interface CarRepository extends CrudRepository <Car, Long> {
	// Fetch cars by brand
	List<Car> findByBrand(@Param("brand") String brand);

	// Fetch cars by color
	List<Car> findByColor(@Param("color") String color);

	// Fetch statisticy by brand
//	@Query(value = "SELECT NEW com.agilesolutions.boot.model.CarGraph(brand, year, avg(price)) from Car group by brand,year")
//	List<CarGraph> getAverageByBrand();
	
}
