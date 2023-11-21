"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.intersectPolygons=exports.calculateBoundsRect=exports.сentroid=exports.rectangleInsideRectangleUnrotated=exports.pointInsideRectangleUnrotated=exports.pointInsidePolygon=exports.pointInsideRectangle=exports.triangleArea=exports.lineCenter=exports.lineRectangleIntersections=exports.perpendicularPoint=exports.linesIntersectionXY=exports.linesIntersection=exports.minDistanceLineEndsXY=exports.minDistanceLineEnds=exports.perpendicularToLine=exports.pointIsOnLine=exports.lineLengthXY=exports.lineLength=exports.getDirection=exports.pointsCenter=exports.lineAngle=exports.getAngle=exports.getViewBox=exports.contains=exports.shiftPoint=exports.rotatePoints=exports.rotatePoint=exports.translatePoint=exports.scalePoint=exports.roundPoint=exports.round=exports.BasePoint=exports.Rect=exports.Line=exports.Point=void 0;class Point{constructor(x=0,y=0){this.x=x,this.y=y}}exports.Point=Point;class Line{constructor(p0,p1){this.p0=p0,this.p1=p1}}exports.Line=Line;class Rect{constructor(p0,p1,p2,p3){this.p0=p0,this.p1=p1,this.p2=p2,this.p3=p3}static fromWH(x,y,width,height){return new Rect(new Point(x,y),new Point(x+width,y),new Point(x+width,y+height),new Point(x,y+height))}get width(){return lineLength(this.p0,this.p1)}get height(){return lineLength(this.p1,this.p2)}get x(){return this.p0.x}get y(){return this.p0.y}isZero(){return 0==this.x&&0==this.y&&0==this.width&&0==this.height}get center(){return{x:this.x+this.width/2,y:this.y+this.height/2}}get square(){return this.width*this.height}}var BasePoint;function round(value,digits=3){return digits&&0!=digits?null!=value.x&&null!=value.y?new Point(round(value.x,digits),round(value.y,digits)):Math.round(value*Math.pow(10,digits))/Math.pow(10,digits):value}function roundPoint(point,digits){return digits&&0!=digits?new Point(Math.round(round(point.x,digits)),Math.round(round(point.y,digits))):point}function scalePoint(p,dx,dy,boundingRect,basePoint){let point;return basePoint==BasePoint.Left||basePoint==BasePoint.Right?dy=0:basePoint!=BasePoint.Top&&basePoint!=BasePoint.Bottom||(dx=0),basePoint==BasePoint.TopLeft||basePoint==BasePoint.Left||basePoint==BasePoint.Top?point=new Point(round(p.x+(p.x-boundingRect.x)/boundingRect.width*dx),round(p.y+(p.y-boundingRect.y)/boundingRect.height*dy)):basePoint==BasePoint.TopRight||basePoint==BasePoint.Right?point=new Point(round(p.x-(boundingRect.x+boundingRect.width-p.x)/boundingRect.width*-1*dx),round(p.y+(p.y-boundingRect.y)/boundingRect.height*dy)):basePoint==BasePoint.BottomRight?point=new Point(round(p.x-(boundingRect.x+boundingRect.width-p.x)/boundingRect.width*-1*dx),round(p.y-(boundingRect.y+boundingRect.height-p.y)/boundingRect.height*-1*dy)):basePoint!=BasePoint.BottomLeft&&basePoint!=BasePoint.Bottom||(point=new Point(round(p.x+(p.x-boundingRect.x)/boundingRect.width*dx),round(p.y-(boundingRect.y+boundingRect.height-p.y)/boundingRect.height*-1*dy))),isNaN(point.x)||isNaN(point.y)||!isFinite(point.x)||!isFinite(point.y)?p:point}function translatePoint(delta,dx,dy){return new Point(round(dx+delta.x),round(dy+delta.y))}function rotatePoint(angle,point,cX,cY){let radians=angle/(180/Math.PI);return new Point(round((point.x-cX)*Math.cos(radians)-(point.y-cY)*Math.sin(radians)+cX),round((point.x-cX)*Math.sin(radians)+(point.y-cY)*Math.cos(radians)+cY))}function rotatePoints(angle,points,cX,cY){return points.map((point=>rotatePoint(angle,point,cX,cY)))}function shiftPoint(point,length,angle){return{x:point.x+length*Math.sin((90-angle)*Math.PI/180),y:point.y+length*Math.sin(angle*Math.PI/180)}}function contains(r1,r2){return r2.x+r2.width<r1.x+r1.width&&r2.x>r1.x&&r2.y>r1.y&&r2.y+r2.height<r1.y+r1.height}function getViewBox(point,viewBox,heightWidthRatio,zoomIn){let offsetX=(point.x-viewBox.x)/viewBox.width,offsetY=(point.y-viewBox.y)/viewBox.height,newWidth=zoomIn?.8*viewBox.width:1.2*viewBox.width,newHeight=newWidth*heightWidthRatio,newX=viewBox.x-(newWidth-viewBox.width)*offsetX,newY=viewBox.y-(newHeight-viewBox.height)*offsetY;return Rect.fromWH(newX,newY,newWidth,newHeight)}function getAngle(centerPoint,startPoint,endPoint){let a=lineLength(startPoint,centerPoint),b=lineLength(endPoint,centerPoint),c=lineLength(startPoint,endPoint),cos=round((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2))/(2*a*b),3);return getDirection(centerPoint,startPoint,endPoint)*round(180*Math.acos(cos>1?1:cos)/Math.PI,2)}function lineAngle(startPoint,endPoint){let p1={x:startPoint.x+1e5,y:startPoint.y},a=lineLength(p1,startPoint),b=lineLength(endPoint,startPoint),c=lineLength(p1,endPoint),cos=round((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2))/(2*a*b),4);return getDirection(startPoint,p1,endPoint)*round(180*Math.acos(cos>1?1:cos)/Math.PI,3)}function pointsCenter(startPoint,endPoint){return new Point((startPoint.x+endPoint.x)/2,(startPoint.y+endPoint.y)/2)}function getDirection(centerPoint,startPoint,endPoint){return(startPoint.x-centerPoint.x)*(endPoint.y-centerPoint.y)-(startPoint.y-centerPoint.y)*(endPoint.x-centerPoint.x)<0?-1:1}function lineLength(p1,p2){return round(Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2)),4)}function lineLengthXY(x1,y1,x2,y2){return round(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)),4)}function pointIsOnLine(p,p1,p2){return lineAngle(p1,p)==lineAngle(p1,p2)&&lineLength(p1,p)<=lineLength(p1,p2)}function perpendicularToLine(point,start,end){const k=((end.y-start.y)*(point.x-start.x)-(end.x-start.x)*(point.y-start.y))/(Math.pow(end.y-start.y,2)+Math.pow(end.x-start.x,2));let p=new Point(point.x-k*(end.y-start.y),point.y+k*(end.x-start.x));return{p:p,isInside:p.x>=Math.min(start.x,end.x)&&p.x<=Math.max(start.x,end.x)&&p.y>=Math.min(start.y,end.y)&&p.y<=Math.max(start.y,end.y)}}function minDistanceLineEnds(l1,p){return Math.min(lineLength(l1.p0,p),lineLength(l1.p1,p))}function minDistanceLineEndsXY(x1,y1,x2,y2,x,y){return Math.min(lineLengthXY(x1,y1,x,y),lineLengthXY(x2,y2,x,y))}function linesIntersection(line1,line2,minDistance=0){return linesIntersectionXY(line1.p0.x,line1.p0.y,line1.p1.x,line1.p1.y,line2.p0.x,line2.p0.y,line2.p1.x,line2.p1.y,minDistance)}function linesIntersectionXY(x1,y1,x2,y2,x3,y3,x4,y4,minDistance=0){let denominator,a,b,numerator1,numerator2,result={point:null,onLine1:!1,onLine2:!1};return denominator=(y4-y3)*(x2-x1)-(x4-x3)*(y2-y1),0===denominator||(a=y1-y3,b=x1-x3,numerator1=(x4-x3)*a-(y4-y3)*b,numerator2=(x2-x1)*a-(y2-y1)*b,a=round(numerator1/denominator,6),b=round(numerator2/denominator,6),result.point=new Point(x1+a*(x2-x1),y1+a*(y2-y1)),a>=0&&a<=1&&(result.onLine1=!0),b>=0&&b<=1&&(result.onLine2=!0),!minDistance||result.onLine1&&result.onLine2||!(result.onLine1&&minDistanceLineEndsXY(x3,y3,x4,y4,result.point.x,result.point.y)<=minDistance||result.onLine2&&minDistanceLineEndsXY(x1,y1,x2,y2,result.point.x,result.point.y)<=minDistance)||(result.onLine1=result.onLine2=!0)),result}function perpendicularPoint(start,end,pLength){const angle=lineAngle(start,end)-90;let c=pointsCenter(start,end);const x=pLength*Math.cos(angle*Math.PI/180),y=pLength*Math.sin(angle*Math.PI/180);return new Point(c.x+round(x,1),c.y+round(y,1))}function lineRectangleIntersections(line,rect){const points=[];let res=linesIntersection(line,new Line(rect.p0,rect.p1));return res.onLine1&&res.onLine2&&points.push(new Point(res.point.x,res.point.y)),res=linesIntersection(line,new Line(rect.p1,rect.p2)),res.onLine1&&res.onLine2&&points.push(new Point(res.point.x,res.point.y)),res=linesIntersection(line,new Line(rect.p2,rect.p3)),res.onLine1&&res.onLine2&&points.push(new Point(res.point.x,res.point.y)),res=linesIntersection(line,new Line(rect.p0,rect.p3)),res.onLine1&&res.onLine2&&points.push(new Point(res.point.x,res.point.y)),points}function lineCenter(p1,p2){return new Point((p1.x+p2.x)/2,(p1.y+p2.y)/2)}function triangleArea(p1,p2,p3){return Math.abs(.5*(p1.x*(p2.y-p3.y)+p2.x*(p3.y-p1.y)+p3.x*(p1.y-p2.y)))}function pointInsideRectangle(p,rect){const rArea=lineLength(rect.p0,rect.p1)*lineLength(rect.p1,rect.p2),sAreas=triangleArea(p,rect.p0,rect.p1)+triangleArea(p,rect.p1,rect.p2)+triangleArea(p,rect.p2,rect.p3)+triangleArea(p,rect.p3,rect.p0);return Math.abs(rArea-sAreas)<.01*rArea?p:null}function pointInsidePolygon(point,polygon,excludeBounds=!1){if(excludeBounds)for(var i=0;i<polygon.length-1;i++)if(pointIsOnLine(point,polygon[i],polygon[i+1]))return!1;let result=!1,j=polygon.length-1;for(i=0;i<polygon.length;i++)(polygon[i].y<point.y&&polygon[j].y>=point.y||polygon[j].y<point.y&&polygon[i].y>=point.y)&&polygon[i].x+(point.y-polygon[i].y)/(polygon[j].y-polygon[i].y)*(polygon[j].x-polygon[i].x)<point.x&&(result=!result),j=i;return result}function pointInsideRectangleUnrotated(p,rect){return p.x>rect.p0.x&&p.x<rect.p2.x&&p.y>rect.p0.y&&p.y<rect.p2.y}function rectangleInsideRectangleUnrotated(rect1,rect2){return pointInsideRectangleUnrotated(rect2.p0,rect1)&&pointInsideRectangleUnrotated(rect2.p1,rect1)&&pointInsideRectangleUnrotated(rect2.p2,rect1)&&pointInsideRectangleUnrotated(rect2.p3,rect1)}function сentroid(points){let accumulatedArea=0,centerX=0,centerY=0;for(var i=0,j=points.length-1;i<points.length;j=i++)if(null!=points[i]&&null!=points[j]){var temp=points[i].x*points[j].y-points[j].x*points[i].y;accumulatedArea+=temp,centerX+=(points[i].x+points[j].x)*temp,centerY+=(points[i].y+points[j].y)*temp}return accumulatedArea*=3,new Point(centerX/accumulatedArea,centerY/accumulatedArea)}function calculateBoundsRect(pts){let points=[].concat(pts).sort(((a,b)=>a.x-b.x));var x1=points[0].x,x2=points[points.length-1].x;points=points.sort(((a,b)=>a.y-b.y));var y1=points[0].y,y2=points[points.length-1].y;return new Rect(new Point(x1,y1),new Point(x2,y1),new Point(x2,y2),new Point(x1,y2))}function intersectPolygons(points,polygon){for(var i=1;i<points.length;i++)for(var j=1;j<polygon.length;j++){var inter=linesIntersectionXY(points[i-1].x,points[i-1].y,points[i].x,points[i].y,polygon[j-1].x,polygon[j-1].y,polygon[j].x,polygon[j].y);if(inter.onLine1&&inter.onLine2)return!0}return!1}exports.Rect=Rect,function(BasePoint){BasePoint[BasePoint.TopLeft=4]="TopLeft",BasePoint[BasePoint.Top=5]="Top",BasePoint[BasePoint.TopRight=6]="TopRight",BasePoint[BasePoint.Right=7]="Right",BasePoint[BasePoint.BottomRight=0]="BottomRight",BasePoint[BasePoint.Bottom=1]="Bottom",BasePoint[BasePoint.BottomLeft=2]="BottomLeft",BasePoint[BasePoint.Left=3]="Left",BasePoint[BasePoint.Center=8]="Center"}(BasePoint=exports.BasePoint||(exports.BasePoint={})),exports.round=round,exports.roundPoint=roundPoint,exports.scalePoint=scalePoint,exports.translatePoint=translatePoint,exports.rotatePoint=rotatePoint,exports.rotatePoints=rotatePoints,exports.shiftPoint=shiftPoint,exports.contains=contains,exports.getViewBox=getViewBox,exports.getAngle=getAngle,exports.lineAngle=lineAngle,exports.pointsCenter=pointsCenter,exports.getDirection=getDirection,exports.lineLength=lineLength,exports.lineLengthXY=lineLengthXY,exports.pointIsOnLine=pointIsOnLine,exports.perpendicularToLine=perpendicularToLine,exports.minDistanceLineEnds=minDistanceLineEnds,exports.minDistanceLineEndsXY=minDistanceLineEndsXY,exports.linesIntersection=linesIntersection,exports.linesIntersectionXY=linesIntersectionXY,exports.perpendicularPoint=perpendicularPoint,exports.lineRectangleIntersections=lineRectangleIntersections,exports.lineCenter=lineCenter,exports.triangleArea=triangleArea,exports.pointInsideRectangle=pointInsideRectangle,exports.pointInsidePolygon=pointInsidePolygon,exports.pointInsideRectangleUnrotated=pointInsideRectangleUnrotated,exports.rectangleInsideRectangleUnrotated=rectangleInsideRectangleUnrotated,exports.сentroid=сentroid,exports.calculateBoundsRect=calculateBoundsRect,exports.intersectPolygons=intersectPolygons;