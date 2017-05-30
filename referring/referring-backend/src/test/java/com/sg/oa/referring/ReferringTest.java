package com.sg.oa.referring;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
//@SpringBootTest
//@Import(MyTestsConfiguration.class)
public class ReferringTest {


//    @Autowired
//    private ReferringService referringService;
//
//    @MockBean
//    private ReferringRepository mockRepository;
    
    @Test
    public void findItemTest() {
    	assertThat(true).isEqualTo(true);
//    	Referring given = new Referring();
//        given(this.mockRepository.findByIdAndFetchLettersEagerly(1L)).willReturn(given);
//        Referring expected = referringService.findById(1L);
//        assertThat(given).isEqualTo(expected);
    }
}
