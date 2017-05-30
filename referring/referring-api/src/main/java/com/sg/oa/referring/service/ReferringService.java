package com.sg.oa.referring.service;

import java.util.List;

import com.sg.oa.referring.model.Referring;

public interface ReferringService {

	List<Referring> findReferringsBySubject(String name);

	Referring findById(Long id);
}
