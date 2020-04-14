from LRUCacheProblem import LRUCacheProblem

class TestCases:
    
    def __init__(self):
        pass
    
    def test(self):
        gets = LRUCacheProblem(3)
        gets.put(1)
        assert gets.get(1) == 1,"Testcase Failed" 
        print("Testcase1 Passed")
        
        gets.put(4)
        assert gets.get(4) == 4,"Testcase Failed"
        print("Testcase2 Passed")
        
        gets.put(3)
        assert gets.get(3) == 3 ,"Testcase Failed" 
        print("Testcase3 Passed")
        gets.put(2)
        
              
        assert gets.get(1) == None ,"Testcase Failed"
        print("All test cases passed")
        
        lists = gets.get_cache()
        for i in lists:
            print(i)
        
        
if __name__ == '__main__':
    a = TestCases()
    a.test()