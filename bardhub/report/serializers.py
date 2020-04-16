from rest_framework import serializers

class ReportSerializer():
    def __init__(self, row):
        self.row = row
    def to_representation():
        print(self.row)
        #printing as string Result
        #now printing as an int
        return{"Result": self.row}
        # print("Row result passed to serializers is: ")
        # print(row.Result)
        # return(row.Result)
        
        #NoneType object has no attribute 'copy'
        
