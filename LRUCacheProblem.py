class LRUCacheProblem:

    def __init__(self,capacity):
        self.capacity=capacity
        self.cache={}
        self.lru=[]

    