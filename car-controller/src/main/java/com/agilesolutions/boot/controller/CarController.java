package com.agilesolutions.boot.controller;

import static net.logstash.logback.argument.StructuredArguments.kv;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agilesolutions.boot.model.Car;
import com.agilesolutions.boot.repository.CarRepository;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * 
 * @author u24279
 *
 */
@RestController
@RequestMapping("/api")
public class CarController {

	@Autowired
	private CarRepository repository;

	private static final Logger logger = LoggerFactory.getLogger(CarController.class);

	@Value("${backend.url}")
	private String endpoint;

	@Value("${spring.application.version}")
	private String version;

	/**
	 * GET /api/cars
	 *
	 * @param auth (required)
	 * @return default response (status code 200)
	 */
	@ApiOperation(value = "", nickname = "getCars", notes = "", response = Object.class, tags = {})
	@ApiResponses(value = { @ApiResponse(code = 200, message = "default response", response = Object.class) })
	@RequestMapping(value = "/api/cars", produces = { "*/*" }, method = RequestMethod.GET)
	public ResponseEntity<Object> getCars(
			@NotNull @ApiParam(value = "", required = true, allowableValues = "RSA, DSS, aNULL, DH, ECDH, KRB5, ECDSA, PSK, GOST94, GOST01, FZA, SRP, ANY") @Valid @RequestParam(value = "auth", required = true) String auth) {

		ResponseEntity<List<Car>> response = null;
		try {
			logger.info("Fetching cars", kv("type", "ATL"));

//			RestTemplate restTemplate = new RestTemplate();
//			
//			ResponseEntity<List<Car>> result = restTemplate.exchange(endpoint, HttpMethod.GET, null, new ParameterizedTypeReference<List<Car>>() {});
//			
//			return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);

			return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);

		} catch (Exception e) {
			logger.error("Error fetching cars with {}", e.getMessage(), kv("type", "EXL"));

			return new ResponseEntity<>(null, null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

    /**
     * POST /api/cars
     *
     * @param car  (optional)
     * @return default response (status code 200)
     */
    @ApiOperation(value = "", nickname = "addCar", notes = "", response = Car.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "default response", response = Car.class) })
    @RequestMapping(value = "/api/cars",
        produces = { "*/*" }, 
        method = RequestMethod.POST)
    public ResponseEntity<Car> addCar(@ApiParam(value = ""  )  @Valid @RequestBody(required = false) Car car) {

		logger.info("Adding vehicle {}", car.getBrand(), kv("type", "SAL"));

		try {
			return new ResponseEntity<Car>(repository.save(car), HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Exceptin while adding vehicle {}", car.getBrand(), kv("type", "EXL"));
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

    /**
     * DELETE /api/cars/{id}
     *
     * @param id  (required)
     * @return default response (status code 200)
     */
    @ApiOperation(value = "", nickname = "deleteCar", notes = "", response = String.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "default response", response = String.class) })
    @RequestMapping(value = "/api/cars/{id}",
        produces = { "*/*" }, 
        method = RequestMethod.DELETE)
    public ResponseEntity<String> deleteCar(@ApiParam(value = "",required=true) @PathVariable("id") Long id) {

		logger.info("Removing vehicle with id {}", id, kv("type", "SAL"));

		try {
			repository.deleteById(id);

			return new ResponseEntity<String>("Car removed successfully", HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Excpeption occured while removing vehicle with id {}", id, kv("type", "EXL"));
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	/**
	 * GET /api/cars/{id}
	 *
	 * @param id (required)
	 * @return default response (status code 200)
	 */
	@ApiOperation(value = "", nickname = "fetchCar", notes = "", response = Car.class, tags = {})
	@ApiResponses(value = { @ApiResponse(code = 200, message = "default response", response = Car.class) })
	@RequestMapping(value = "/api/cars/{id}", produces = { "*/*" }, method = RequestMethod.GET)
	public ResponseEntity<Car> fetchCar(@ApiParam(value = "", required = true) @PathVariable("id") Long id) {

		logger.info("fetching vehicle with id {}", id, kv("type", "ATL"));

		try {
			return new ResponseEntity<Car>(repository.findById(id).get(), HttpStatus.OK);
		} catch (Exception e) {
			logger.info("Exceptin while fetching vehicle with id {}", id, kv("type", "SAL"));
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	/**
	 * GET /api/cars/graph
	 *
	 * @return default response (status code 200)
	 */
	@ApiOperation(value = "", nickname = "fetchCarGrapg", notes = "", response = Object.class, tags = {})
	@ApiResponses(value = { @ApiResponse(code = 200, message = "default response", response = Object.class) })
	@RequestMapping(value = "/api/cars/graph", produces = { "*/*" }, method = RequestMethod.GET)
	public ResponseEntity<Object> fetchCarGrapg() {

		logger.info("Fetching average price per brand and year {}", kv("type", "ATL"));

//		try {
//			return new ResponseEntity<Iterable<CarGraph>>(repository.getAverageByBrand(), HttpStatus.OK);
//		} catch (Exception e) {
//			logger.info("Exceptin while fetching vehicle graph", kv("type", "SAL"));
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

	}

	/**
	 * GET /api/version
	 *
	 * @return default response (status code 200)
	 */
	@ApiOperation(value = "", nickname = "showVersion", notes = "", response = String.class, tags = {})
	@ApiResponses(value = { @ApiResponse(code = 200, message = "default response", response = String.class) })
	@RequestMapping(value = "/api/version", produces = { "*/*" }, method = RequestMethod.GET)
	public ResponseEntity<String> showVersion() {

		logger.info("Running version {} of Demo application", version, kv("type", "SAL"));

		return new ResponseEntity<String>(version, HttpStatus.NOT_IMPLEMENTED);
	}

}
