package com.agilesolutions.boot.model;

public class CarGraph {
	
	private String brand;
	
	private int year;
	
	private double total;
	
	

	public CarGraph(String brand, int year, double total) {
		super();
		this.brand = brand;
		this.year = year;
		this.total = total;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}
	
	

}
