class LRUCacheProblem:

    def __init__(self,capacity):
        self.capacity=capacity
        self.cache={}
        self.lru=[]

    def get(self,key):
        if key in self.lru:
            return self.cache[key]
        return None 
    def put(self,key):
        if len(self.lru) < self.capacity:
            if key in self.lru:
                self.lru.remove(key)
                self.lru.append(key)  
                self.cache[key]  = key
            else:
                self.lru.append(key)
                self.cache[key] = key
        else:
            
            r = self.lru.pop(0)
            self.lru.append(key)
            del self.cache[r]
            self.cache[key] = key
            
            
    def get_cache(self):
        lists = []
        for key in reversed(self.lru):
            lists.append(self.cache[key])
        return lists 