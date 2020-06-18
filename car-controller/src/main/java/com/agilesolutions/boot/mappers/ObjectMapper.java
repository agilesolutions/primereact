package com.agilesolutions.boot.mappers;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public interface ObjectMapper<O, D> {

    D mapToDto(O modelObject);
	
    O mapFromDto(D dto);

    default List<O> mapFromDtos(Collection<D> dtos) {
        return dtos.stream()
                .map(this::mapFromDto)
                .collect(Collectors.toList());
    }

    default List<D> mapToDtos(Collection<O> modelObjects) {
        return modelObjects.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

}