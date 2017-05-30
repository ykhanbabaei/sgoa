package com.sg.oa.referring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sg.oa.referring.dao.ReferringRepository;
import com.sg.oa.referring.model.Referring;

@Service
public class ReferringServiceImpl implements ReferringService {

	@Autowired
	private ReferringRepository referringRepository;
	
	@Override
	public List<Referring> findReferringsBySubject(String name){
		return referringRepository.findBySubjectContaining(name);
//		List<Referring> list = new ArrayList<>();
//		iterable.forEach(list::add);
//		return list;
	}

	@Override
	public Referring findById(Long id) {
		Referring referring = referringRepository.findByIdAndFetchLettersEagerly(id);
		return referring;
	}


}
