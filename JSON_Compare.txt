1. How to compare two JSON have the same properties without order?

	* Two objects can be compared by converting them to string and comparing those strings. However, when the properties of the 2 objects are the same but are not in the same order,
  the converted strings when compared will not return true even when they should.
	
  * Therefore, the way to compare two objects which have the same properties but in different orders is to compare each value individually.
