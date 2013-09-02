/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013年 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#import "TiUIListView+DKLiveBlur.h"
#import "ImageLoader.h"
#import "DKLiveBlurView.h"

@implementation TiUIListView (TiUIListView_DKLiveBlur)

DKLiveBlurView *backgroundView;

-(void)initializeState
{
    [super initializeState];
    
    if (self)
    {
        backgroundView = [[DKLiveBlurView alloc] initWithFrame:[[self tableView] frame]];
        [backgroundView setScrollView:[self tableView]];
        [[self tableView] setBackgroundView:backgroundView];
    }
}

-(void)setBackgroundBlurImage_:(id)args
{
    NSURL *url = [TiUtils toURL:args proxy:self.proxy];
    UIImage *image = [[ImageLoader sharedLoader] loadImmediateImage:url];
    
    [backgroundView setOriginalImage:[[ImageLoader sharedLoader] loadImmediateImage:url]];
    backgroundView.isGlassEffectOn = YES;
}

-(void)setGlassColor_:(id)args
{
    TiColor *glassColor = [TiUtils colorValue:args];
    
    if (glassColor == nil)
    {
        [backgroundView setGlassColor:[UIColor whiteColor]];
    }
    else
    {
        [backgroundView setGlassColor:[glassColor _color]];
    }
}

@end
